import { makePostRequest } from '../utils'

export const KEEP_USER_DATA = 'KEEP_USER_DATA'

export function keepUser(user) {
  return {
    type: KEEP_USER_DATA,
    user
  }
}

export function fetchUser(args, route) {
  return dispatch => {
    makePostRequest(args, route)
      .then(({ user }) => dispatch(keepUser(user)))
      .catch(err => console.log(err));
  };
}
