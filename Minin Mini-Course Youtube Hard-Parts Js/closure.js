// function createCalcFunction(n) {
//   return function() {
//     console.log(1000 * n);
//   }
// }

// const calc = createCalcFunction(54);
// calc()

// function createIncrementor(n) {
//   return function(num) {
//     return n + num;
//   }
// }

// const addOne = createIncrementor(1)

// console.log(addOne(10));

// const sum = (a) => (b) => (c) => {
//   return a + b + c;
// }

// console.log(sum(4)(4)(4));

// const urlGenerator = (domain) => {
//   return function(url) {
//     return `https://${url}.${domain}`;
//   }
// }

// const comUrl = urlGenerator('com');
// const ruUrl = urlGenerator('ru');

// console.log(comUrl('google'));
// console.log(ruUrl('yandex'));

// * С собеседований задачка
// **
//*--------------------------------------------------
//* Написать свою функцию bind
//*--------------------------------------------------
// *
function logPerson() {
  console.log(`Person: ${this.name}, ${this.age}, ${this.job}`);
}

const person1 = {name: "Sarah", age: 23, job: 'Decorator'};
const person2 = {name: "Doriah", age: 24, job: 'Visual Art'};

function bind(context, fn) {
  return function(...args) {
    fn.apply(context, args);
  }
}

bind(person1, logPerson)();
bind(person2, logPerson)();