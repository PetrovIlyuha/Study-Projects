const delay = (ms) => {
  return new Promise(res => setTimeout(() => {res()}, ms))
}

const url = 'https://jsonplaceholder.typicode.com/todos';

// function fetchTodos() {
//   console.log('Fetch had started')
//   return delay(2000).then(() => {
//     return fetch(url)
//   })
//   .then(response => response.json())
// }

// fetchTodos()
//   .then(data => {
//     console.log('Data:', data);
//   })
//   .catch(e => console.log(e));

async function fetchAsyncTodos() {
  console.log('Fetch todo had started...');
  try {
    await delay(2000);
    console.log('request travel')
    const response = await fetch(url);
    console.log('fetch worked')
    const data = await response.json();
    console.log('Data: ', data);
  } catch (e) {
    console.error(e);
  } finally {
    console.log('resolved finally')
  }
}

fetchAsyncTodos()