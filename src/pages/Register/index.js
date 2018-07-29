import React from 'react'
import { Link } from 'react-router-dom';
import AuthCard from '../../components/common/AuthCard'
import RegsterForm from '../../components/Forms/RegisterForm'
import style from '../styles.css'

const RegisterPage = () => {
  return (
    <AuthCard title='Register'>
      <RegsterForm onSubmit={(name, surname, email, password) => console.log(name, surname, email, password)} />
      <p>
        Already have an account? <Link className={style.link} to="/login">Login</Link>
      </p>
    </AuthCard>
  )
}

export default RegisterPage