import React from 'react'
import style from './styles.css'

const AuthCard = props => {
  return (
    <div className={style.container}>
      <h1 className={style.title}>{props.title}</h1>
      {props.children}
    </div>
  )
}

export default AuthCard