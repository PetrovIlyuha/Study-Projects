// ? Recursion
// ? Factorial
function fac(x) {
  if (x === 1) return 1;
  return x * fac(x - 1);
}

// * Output to the browser
// let result = fac(5);

//! When things go wrong
// ! #1 There is no base case
// ! #2 Forgetting the return statement within the base case

function collectOddValues(arr) {
  let newArr = [];

  if (arr.length === 0) {
    return newArr;
  }

  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }

  newArr = newArr.concat(collectOddValues(arr.slice(1)));
  return newArr;
}

let result = collectOddValues([1, 2, 3, 4, 5]);

const output = (document.querySelector('.root').innerHTML = result);
