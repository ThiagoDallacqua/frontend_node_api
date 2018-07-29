import jwt from 'jsonwebtoken';

export const makePostRequest = (data, route) => {
  fetch(`http://localhost:3001/${route}`, {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    method: 'post',
    body: JSON.stringify(data)
  }).then(response => response.json())
    .then(data => {
      console.log(data)
      if (data.success) {
        const secret = process.env.TOKEN_SECRET || 'ilovejavascript'
        console.log(secret)
        jwt.verify(data.token, secret, (err, decoded) => {
          if (err) {
            return console.log('Failed to authenticate token.')
          } else {
            console.log(decoded)
          }
        })
      }
    })
}