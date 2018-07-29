import React from 'react'
import style from '../styles.css'

export default class LoginForm extends React.Component {
  state = {
    email: '',
    password: ''
  }

  onChangeInput = e => {
    if (e.target.name === 'email') {
      this.setState({ email: e.target.value })
    } else {
      this.setState({ password: e.target.value })
    }
  }

  render() {
    const { email, password } = this.state
    const { onSubmit } = this.props

    return (
      <form 
        onSubmit={e => {
          e.preventDefault()
          onSubmit(email, password)
        }}
        className={style.form}
      >
        <input
          onChange={this.onChangeInput}
          name='email' 
          placeholder='Email'
          type='email'
          value={email}
          className={style.inputs}
        />
        <input
          onChange={this.onChangeInput}
          name='password'
          placeholder='Password'
          type='password'
          value={password}
          className={style.inputs}
        />
        <button className={style.button} type='submit'>Login</button>
      </form>
    )
  }
}