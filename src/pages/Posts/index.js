import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import Card from '../../components/common/Card'
// import style from '../styles.css'

class PostPage extends React.Component {
  state = {
    posts: []
  }
  render() {
    const { user } = this.props
    if (Object.keys(user).length === 0) return <Redirect to='/login' />

    return (
      <Card title='Posts'>
        <h1>You are in the Posts page</h1>
      </Card>
    )
  }
}

const mapStatetoProps = ({storeUser}) => {
  const { user } = storeUser
  return {
    user
  }
}

export default connect(
  mapStatetoProps
)(PostPage)