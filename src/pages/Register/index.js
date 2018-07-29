import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { fetchUser } from '../../actions'
import AuthCard from '../../components/common/AuthCard'
import RegisterForm from '../../components/Forms/RegisterForm'
import style from '../styles.css'

const RegisterPage = ({ registerAndKeepUser, history }) => (
  <AuthCard title='Register'>
    <RegisterForm
      onSubmit={async (name, surname, email, password) => {
        await registerAndKeepUser({ name, surname, email, password }, 'register')
        history.push('/posts')
      }}
    />
    <p>
      Already have an account? <Link className={style.link} to="/login">Login</Link>
    </p>
  </AuthCard>
)

const mapDispatchToProps = (dispatch) => {
  return {
    registerAndKeepUser: (args, route) => dispatch(fetchUser(args, route))
  }
}

export default connect(
  null,
  mapDispatchToProps
)(RegisterPage)