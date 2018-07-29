import React from 'react'
import moment from 'moment'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { fetchPosts, updatePostList } from '../../../actions'
import Card from '../../../components/common/Card'
import style from '../styles.css'

class PostPage extends React.Component {
  async componentDidMount() {
    await this.props.getPosts(this.props.token)
  }

  render() {
    const { user, posts, token, deletePost, history } = this.props
    if (Object.keys(user).length === 0) {
      history.push('/login')
      return null
    }

    return (
      <Card>
        <div className={style.actionContainer}>
          <h1 className={style.title}>Posts</h1>
          <Link className={style.buttonLink} to="/posts/create">Create New Post</Link>
        </div>
        {
          posts.length > 0
          ? posts.map(({ id, post }) => (
              <Card key={id}>
                <h1 className={style.title}>{moment(post.postDate).format('DD/MM/YY')}</h1>
                <p className={style.content}>{post.content}</p>
                <button
                  onClick={async () => {
                    await deletePost(token, id)
                  }}
                  className={style.deleteButton}
                >Delete Post</button>
              </Card>
            ))
          : null
        }
      </Card>
    )
  }
}

const mapStatetoProps = ({ storeUser, storePosts, storeToken}) => {
  const { user } = storeUser
  const { posts } = storePosts
  const { token } = storeToken
  return {
    user,
    posts,
    token
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPosts: token => dispatch(fetchPosts(token)),
    deletePost: (token, id) => dispatch(updatePostList(token, id))
  }
}

export default connect(
  mapStatetoProps,
  mapDispatchToProps
)(PostPage)