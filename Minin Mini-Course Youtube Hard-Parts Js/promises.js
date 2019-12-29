console.log('Request Data....');

// setTimeout(() => {
//   console.log('Preparing data....')

//   const backendData = {
//     server: 'aws',
//     port: 2000,
//     status: 'working...'
//   }
//   setTimeout(() => {
//     backendData.modified = true;
//     console.log('Data received...', backendData);
//   }, 1000);
// }, 2000);

// const request = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log('Preparing data...');
//     const backendData = {
//           server: 'aws',
//           port: 2000,
//           status: 'working...'
//         }
//         resolve(backendData);
//   }, 2000);
// });

// request.then(data => {
//   return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         data.modified = true;
//         resolve(data);
//       }, 2000);
//     })
//   })
//   .then(clientData => {
//     clientData.fromPromise = true;
//     return clientData;
//   })
//   .then(data => {
//     console.log('Modified', data);
//   })
//   .catch(err => console.log('Error: ', err))
//   .finally(() => {
//     console.log('Finally...')
//   })

const sleep = (ms) => {
  return new Promise(resolve => {
    setTimeout(() => {resolve() }, ms);
  })
}

sleep(1000).then(() => console.log('1 sec sto'));
sleep(2000).then(() => console.log('2 sec sto'));

Promise.all([sleep(2000), sleep(5000)])
  .then(() => {
    console.log('All promises')
  })

Promise.race([sleep(2000), sleep(5000)])
  .then(() => {
    console.log('Race promises')
  })