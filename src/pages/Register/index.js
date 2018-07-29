import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { fetchUser } from '../../actions'
import AuthCard from '../../components/common/AuthCard'
import RegsterForm from '../../components/Forms/RegisterForm'
import style from '../styles.css'

const RegisterPage = ({registerAndKeepUser}) => (
  <AuthCard title='Register'>
    <RegsterForm
      onSubmit={(name, surname, email, password) => registerAndKeepUser({ name, surname, email, password }, 'register')}
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