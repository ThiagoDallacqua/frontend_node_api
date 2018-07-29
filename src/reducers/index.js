import { combineReducers } from 'redux'
import { storeUser, showError } from './auth'
export default combineReducers({
  storeUser,
  showError
})