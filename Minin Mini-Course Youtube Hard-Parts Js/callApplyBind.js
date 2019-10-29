// ! Context CAll/Apply/Bind
function hello() {
  console.log('Hello', this);
}
const person = {
  name: 'Maria',
  age: 25,
  sayHello: hello,
  sayHelloWindow: hello.bind(document),
  logInfo: function(job = 'Marketing intern', phone = '8-965-111-22-33') {
    console.group(`${this.name} profile`)
    console.log(`Name is ${this.name}`)
    console.log(`Age is ${this.age}`)
    console.log(`Job title is ${job}`)
    console.log(`Phone Number is ${phone}`)
    console.groupEnd();
  }
}

const lena = {
  name: 'Elena',
  age: 23
}

// const fnLenaIngoLog = person.logInfo.bind(lena);
// fnLenaIngoLog('FrontEnd', '8-914-543-53-32');
// person.logInfo.call(lena, 'Backend', '8-019-232-23-12')

person.logInfo.apply(lena, ['FrontEnd','9028323232']);

// * Prototypes
const array = [1,2,3,4,5];

// function multiplyBy(arr, n) {
//   return arr.map(function(i) {
//     return console.log(i * n);
//   })
// }

Array.prototype.multiplyBy = function(n) {
  return this.map(function(i) {
    return i * n;
  })
}

// console.log(array.multiplyBy(2));