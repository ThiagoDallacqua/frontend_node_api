import React from 'react'
import { Link } from 'react-router-dom';
import AuthCard from '../../components/common/AuthCard'
import RegsterForm from '../../components/Forms/RegisterForm'
import { makePostRequest } from '../../utils'
import style from '../styles.css'

const RegisterPage = () => (
  <AuthCard title='Register'>
    <RegsterForm
      onSubmit={(name, surname, email, password) => makePostRequest({ name, surname, email, password }, 'register')}
    />
    <p>
      Already have an account? <Link className={style.link} to="/login">Login</Link>
    </p>
  </AuthCard>
)

export default RegisterPage