import { makePostRequest } from '../utils'

export const KEEP_USER_DATA = 'KEEP_USER_DATA'
export const KEEP_TOKEN_DATA = 'KEEP_TOKEN_DATA'
export const SET_AUTH_ERROR = 'SET_AUTH_ERROR'

export function keepUser(user) {
  return {
    type: KEEP_USER_DATA,
    user
  }
}

export function keepToken(token) {
  return {
    type: KEEP_TOKEN_DATA,
    token
  }
}

export function setAuthError(error) {
  return {
    type: SET_AUTH_ERROR,
    error
  }
}

export function fetchUser(args, route) {
  return async dispatch => {
    await makePostRequest(args, route)
      .then(({ user, token }) => {
        dispatch(keepToken(token))
        dispatch(keepUser(user))
      })
      .catch(err => dispatch(setAuthError(err)));
  }
}
