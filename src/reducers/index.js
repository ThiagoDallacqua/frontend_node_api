import { combineReducers } from 'redux'
import { storeUser, showError, storeToken } from './auth'
import { storePosts } from './posts'
export default combineReducers({
  storeUser,
  showError,
  storeToken,
  storePosts
})