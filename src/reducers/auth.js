import { KEEP_USER_DATA } from '../actions'

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

export function showError (state = {error: {}}, action){
  switch (action.type) {
    case KEEP_USER_DATA:
      const { error } = action

      return {
        ...state,
        error
      }

    default:
      return state

  }
}
