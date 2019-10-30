const requestURL = 'https://jsonplaceholder.typicode.com/users'


function sendRequest(method, url, body = null) {
  return new Promise( (resolve, reject) => {
    const xhr = new XMLHttpRequest();
    
    xhr.open(method, url)
    
    xhr.responseType = 'json'
    xhr.setRequestHeader('Content-Type', 'application/json')
    
    xhr.onload = () => {
      if (xhr.status >= 400) {
        console.error(xhr.response)
      } else {
        console.log(xhr.response)
      }
    }
    
    xhr.send(JSON.stringify(body))

  })  
}

const requestBody = {
  name: 'Marusya',
  age: 37
}

sendRequest('POST', requestURL, requestBody)
  .then(data => console.log(data))
  .catch(err => console.log(err))