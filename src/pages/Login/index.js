import React from 'react'
import { Link } from 'react-router-dom';
import AuthCard from '../../components/common/AuthCard'
import LoginForm from '../../components/Forms/LoginForm'
import { makePostRequest } from '../../utils'
import style from '../styles.css'

const LoginPage = () => (
  <AuthCard title='Login'>
    <LoginForm onSubmit={(email, password) => makePostRequest({ email, password }, 'login')} />
    <p>
      Not Registered yet? <Link className={style.link} to="/register">Sign Up</Link>
    </p>
  </AuthCard>
)

export default LoginPage