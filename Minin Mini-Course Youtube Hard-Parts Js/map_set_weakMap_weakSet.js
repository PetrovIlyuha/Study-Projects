// const obj = {
//   name: 'Petr',
//   age: 37,
//   job: 'FullStack'
// }

// const entries = [
//   ['name', 'Ilya'],
//   ['age', 37],
//   ['job', 'FrontEnd']
// ]

// // console.log(Object.entries(obj));
// // console.log(Object.fromEntries(entries));

// const map = new Map(entries);
// map
//   .set('new Field', 30)
//   .set(obj, 'Value of Object')
//   .set(NaN, 'NaN');
// console.log(map.get('job'))
// map.delete('job');
// map.clear()
// console.log(map.has('job'))
// console.log(map.size)

// * ------------

// for (let [key, value] of map.entries()) {
//   console.log(`${key} : ${value}`)
// }

// for (let value of map.values()) {
//   console.log(value)
// }

// for (let keys of map.keys()) {
//   console.log(keys);
// }

// map.forEach((value, key) => {
//   console.log(value, key);
// });

// ==================

// const array = [...map]
// console.log(array)
// const mapObj = Object.fromEntries(map.entries());

// console.log(mapObj);

// +++++++++++++++

// const users = [
//   {name: 'ELena'},
//   {name: 'Alexey'},
//   {name: 'Valentin'},
// ]

// const visits = new Map()

// visits
//   .set(users[0], new Date())
//   .set(users[1], new Date(new Date().getTime() + 1000 * 60))
//   .set(users[2], new Date(new Date().getTime() + 5000 * 60));

//   function lastVisit(user) {
//     return visits.get(user)
//   }

// console.log(lastVisit(users[1]))
// console.log(lastVisit(users[2]))

// ************************* Set *****************************

const set = new Set([1,2,3,3,3,4,5,5,6]);

set.add(10).add(20).add(30).add(10)

console.log(set);

function uniqueValues(array) {
  return [...new Set(array)];
}

console.log(uniqueValues([1,2,2,2,3,3,3,4,4,5,5,5,6]))


// **************** WEakMap ************************

let obj = {name: 'weakmap'};

obj = null;
console.log(obj)