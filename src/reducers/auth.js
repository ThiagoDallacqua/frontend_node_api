import { 
  KEEP_USER_DATA,
  SET_AUTH_ERROR,
  KEEP_TOKEN_DATA
 } from '../actions'

export function storeUser (state = {user: {}}, action){
  switch (action.type) {
    case KEEP_USER_DATA:
      const { user } = action

      return {
        ...state,
        user
      }

    default:
      return state

  }
}

export function storeToken (state = {token: ''}, action){
  switch (action.type) {
    case KEEP_TOKEN_DATA:
      const { token } = action

      return {
        ...state,
        token
      }

    default:
      return state

  }
}

export function showError (state = {error: {}}, action){
  switch (action.type) {
    case SET_AUTH_ERROR:
      const { error } = action

      return {
        ...state,
        error
      }

    default:
      return state

  }
}
