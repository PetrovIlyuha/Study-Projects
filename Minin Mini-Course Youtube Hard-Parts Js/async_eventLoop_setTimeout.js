console.log('Start');

setTimeout(() => {
  console.log('Start timeout');
  setTimeout(() => {
    console.log('End timeout')
  }, 1000);
}, 1000);

console.log('End');