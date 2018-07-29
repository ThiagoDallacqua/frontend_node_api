import jwt from 'jsonwebtoken';

export const makePostRequest = (data, route) => {
  return fetch(`/${route}`, {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    method: 'post',
    body: JSON.stringify(data)
  }).then(response => response.json())
    .then(data => {
      if (data.success) {
        const secret = process.env.TOKEN_SECRET || 'ilovejavascript'
        return jwt.verify(data.token, secret, (err, decoded) => {
          if (err) {
            return {authorized: false, err}
          } else {
            return {user: decoded.user, token: data.token}
          }
        })
      }
    })
}

export const createOnePost = ({creator, title, content, postData}, token) => {
  return fetch('/create/post', {
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': token,
      'Accept': 'application/json'
    },
    method: 'post',
    body: JSON.stringify({post: {
      creator,
      title,
      content,
      postData
    }})
  }).then(response => response.json())
    .then(data => {
      return data
    })
}

export const fetchAllPosts = token => {
  return fetch('/posts', {
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': token,
      'Accept': 'application/json'
    },
    method: 'get'
  }).then(response => response.json())
    .then(data => {
      return data
    })
}

export const deleteOnePost = (token, id) => {
  return fetch(`/post/${id}`, {
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': token,
      'Accept': 'application/json'
    },
    method: 'delete'
  }).then(response => response.json())
    .then(data => {
      console.log(data)
      return data
    })
}