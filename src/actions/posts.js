import { fetchAllPosts, deleteOnePost, createOnePost } from '../utils'

export const KEEP_POSTS_DATA = 'KEEP_POSTS_DATA'

export function keepPosts(posts) {
  return {
    type: KEEP_POSTS_DATA,
    posts
  }
}

export function createPost(data, token) {
  return async dispatch => {
    await createOnePost(data, token)
      .then(response => {
        if (response.success){
          dispatch(fetchPosts(token))
        }
      })
      .catch(err => console.log(err));
  }
}

export function updatePostList(token, id) {
  return async dispatch => {
    await deleteOnePost(token, id)
      .then(response => {
        if (response.n === 1 && response.ok === 1){
          dispatch(fetchPosts(token))
        }
      })
      .catch(err => console.log(err));
  }
}

export function fetchPosts(token) {
  return async dispatch => {
    await fetchAllPosts(token)
      .then((posts) => dispatch(keepPosts(posts)))
      .catch(err => console.log(err));
  }
}
