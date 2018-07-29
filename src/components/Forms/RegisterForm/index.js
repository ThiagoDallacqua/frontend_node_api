import React from 'react'
import style from '../styles.css'

export default class RegisterForm extends React.Component {
  state = {
    name: '',
    surname: '',
    email: '',
    password: ''
  }

  onChangeInput = e => {
    if (e.target.name === 'name') {
      this.setState({ name: e.target.value })
    } else if (e.target.name === 'surname') {
      this.setState({ surname: e.target.value })
    } else if (e.target.name === 'email') {
      this.setState({ email: e.target.value })
    } else {
      this.setState({ password: e.target.value })
    }
  }

  render() {
    const { name, surname, email, password } = this.state
    const { onSubmit } = this.props

    return (
      <form
        onSubmit={e => {
          e.preventDefault()
          onSubmit(name, surname, email, password)
        }}
        className={style.form}
      >
        <input
          onChange={this.onChangeInput}
          name='name'
          placeholder='Name'
          type='text'
          value={name}
          required
          className={style.inputs}
        />
        <input
          onChange={this.onChangeInput}
          name='surname'
          placeholder='Surname'
          type='text'
          value={surname}
          className={style.inputs}
        />
        <input
          onChange={this.onChangeInput}
          name='email'
          placeholder='Email'
          type='email'
          value={email}
          required
          className={style.inputs}
        />
        <input
          onChange={this.onChangeInput}
          name='password'
          placeholder='Password'
          type='password'
          value={password}
          required
          className={style.inputs}
        />
        <button className={style.button} type='submit'>Register</button>
      </form>
    )
  }
}