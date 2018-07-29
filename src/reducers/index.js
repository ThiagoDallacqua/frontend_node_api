import { KEEP_USER_DATA } from '../actions'

export default function storeUser (state = {user: {}}, action){
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
