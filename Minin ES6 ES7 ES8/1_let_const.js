// {
//   let a = 42;
//   console.log(a)
// }
// let a = 42;

// console.log(a);

// Hoisting is not working for LET and CONST variable declaration
function hoisted() {
  age = 30;
}
let age;
hoisted();
console.log(age);

// Const
const COLOR = "#fff";
COLOR = "#333"; // Assignment to constant variable in not allowed

console.log(COLOR);

const array = [1, 2, 3, 4, 5];
console.log(array);

array.push(6);
