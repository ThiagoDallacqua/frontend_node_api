import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchUser } from '../../actions'
import AuthCard from '../../components/common/AuthCard'
import LoginForm from '../../components/Forms/LoginForm'
import style from '../styles.css'

const LoginPage = ({loginAndKeepUser, history}) => (
  <AuthCard title='Login'>
    <LoginForm onSubmit={async (email, password) => {
      await loginAndKeepUser({ email, password }, 'login')
      history.push('/posts')
    }} />
    <p>
      Not Registered yet? <Link className={style.link} to="/register">Sign Up</Link>
    </p>
  </AuthCard>
)

const mapDispatchToProps = (dispatch) => {
  return {
    loginAndKeepUser: (args, route) => dispatch(fetchUser(args, route))
  }
}

export default connect(
  null,
  mapDispatchToProps
)(LoginPage)