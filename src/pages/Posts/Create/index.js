import React from 'react'
import { connect } from 'react-redux'
import { fetchPosts, createPost, updatePostList } from '../../../actions'
import Card from '../../../components/common/Card'
import sharedStyle from '../styles.css'
import style from './styles.css'

class CreatePostPage extends React.Component {
  state = {
    title: '',
    post: ''
  }

  onTextChange = e => this.setState({ post: e.target.value })

  onTitleChange = e => this.setState({ title: e.target.value })

  onClick = async () => {
    const post = {
      creator: `${this.props.user.name} ${this.props.user.surname}`,
      title: this.state.title,
      content: this.state.post,
      postDate: new Date()
    }

    console.log(post)
    
    await this.props.createPost(post, this.props.token)

    this.props.history.push('/posts')
  }

  async componentDidMount() {
    await this.props.getPosts(this.props.token)
  }

  render() {
    const { user, history } = this.props
    const { post, title } = this.state
    if (Object.keys(user).length === 0) {
      history.push('/login')
      return null
    }

    return (
      <Card>
        <h1 className={sharedStyle.title}>Create a new post</h1>
        <div className={style.titleContainer}>
          <h2 className={style.fieldHeading}>Title</h2>
          <input
            className={style.titleField}
            type='text'
            value={title}
            onChange={this.onTitleChange}
          />
        </div>
        <div className={style.textContainer}>
          <h2 className={style.fieldHeading}>Content</h2>
          <textarea
            className={style.textarea}
            rows='20'
            placeholder='Your new post begins here...'
            onChange={this.onTextChange}
            value={post}
          />
        </div>
        <button
          style={{cursor: 'pointer', height: 'auto'}}
          className={sharedStyle.buttonLink}
          onClick={this.onClick}
        >Publish</button>
      </Card>
    )
  }
}

const mapStatetoProps = ({ storeUser, storeToken }) => {
  const { user } = storeUser
  const { token } = storeToken
  return {
    user,
    token
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPosts: token => dispatch(fetchPosts(token)),
    createPost: (data, token) => dispatch(createPost(data, token)),
    deletePost: (token, id) => dispatch(updatePostList(token, id))
  }
}

export default connect(
  mapStatetoProps,
  mapDispatchToProps
)(CreatePostPage)