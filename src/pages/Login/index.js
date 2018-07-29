import React from 'react'
import { Link } from 'react-router-dom';
import AuthCard from '../../components/common/AuthCard'
import LoginForm from '../../components/Forms/LoginForm'
import style from '../styles.css'

const LoginPage = () => {
  return (
    <AuthCard title='Login'>
      <LoginForm onSubmit={(email, password) => console.log(email, password)} />
      <p>
        Not Registered yet? <Link className={style.link} to="/register">Sign Up</Link>
      </p>
    </AuthCard>
  )
}

export default LoginPage