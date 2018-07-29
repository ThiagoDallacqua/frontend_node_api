import jwt from 'jsonwebtoken';

export const makePostRequest = (data, route) => {
  return fetch(`http://localhost:3001/${route}`, {
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
            return decoded
          }
        })
      }
    })
}