import React from 'react'
import { render, cleanup } from 'react-testing-library'
import LoginForm from '../components/Forms/LoginForm'
import RegisterForm from '../components/Forms/RegisterForm'


afterEach(cleanup)

test('calls onSubmit with the email and password when submitted', () => {
  const fakeUser = {email: 'somebody@email.com', password: '1234pswd'}
  const handleSubmit = jest.fn()
  const { getByText } = render(
    <LoginForm onSubmit={() => handleSubmit(fakeUser.email, fakeUser.password)} />,
  )

  const submitButtonNode = getByText('Login')

  submitButtonNode.click()

  expect(handleSubmit).toHaveBeenCalledTimes(1)
  expect(handleSubmit).toHaveBeenCalledWith(fakeUser.email, fakeUser.password)
  expect(submitButtonNode.type).toBe('submit')
})

test('calls onSubmit with all required fields when submitted', () => {
  const fakeUser = { name: 'somebody', email: 'somebody@email.com', password: '1234pswd' }
  const handleSubmit = jest.fn()
  const { getByText } = render(
    <RegisterForm onSubmit={() => handleSubmit(fakeUser.name, fakeUser.email, fakeUser.password)} />,
  )

  const submitButtonNode = getByText('Register')

  submitButtonNode.click()

  expect(handleSubmit).toHaveBeenCalledTimes(1)
  expect(handleSubmit).toHaveBeenCalledWith(fakeUser.name, fakeUser.email, fakeUser.password)
  expect(submitButtonNode.type).toBe('submit')
})
