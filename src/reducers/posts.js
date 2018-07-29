import { KEEP_POSTS_DATA } from '../actions'

export function storePosts(state = { posts: [] }, action) {
  switch (action.type) {
    case KEEP_POSTS_DATA:
      const { posts } = action

      return {
        ...state,
        posts
      }

    default:
      return state

  }
}