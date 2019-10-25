const requestURL = 'https://jsonplaceholder.typicode.com/users'


function sendRequest(method, url, body = null) {
  const headers = {
    'Content-Type': 'application/json'
  }
  return fetch(url, {
    method: method,
    body: JSON.stringify(body),
    headers: headers
  }).then(response => {
    if (response.ok) {
      return response.json()
    }
    return response.json().then(error => {
      const e = new Error('Server not responding')
      e.data = error
      throw e
    })
  })
}
 
const requestBody = {
  name: 'Marusya',
  age: 37
}

// sendRequest('GET', requestURL, requestBody)
//    .then(data => console.log(data))
//    .catch(err => console.log(err))

sendRequest('POST', requestURL, requestBody)
  .then(data => console.log(data))
  .catch(err => console.log(err))