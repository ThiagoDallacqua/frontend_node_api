import { makePostRequest } from '../utils'

export const KEEP_USER_DATA = 'KEEP_USER_DATA'

export function keepUser(user) {
  return {
    type: KEEP_USER_DATA,
    user
  }
}

export function setAuthError(error) {
  return {
    type: KEEP_USER_DATA,
    error
  }
}

export function fetchUser(args, route) {
  return async dispatch => {
    await makePostRequest(args, route)
      .then(({ user }) => dispatch(keepUser(user)))
      .catch(err => dispatch(setAuthError(err)));
  }
}
