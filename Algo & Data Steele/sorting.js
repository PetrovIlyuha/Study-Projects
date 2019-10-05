// * Built-in Sorting------------------------
// function comparatorNum(num1, num2) {
//   return num1 - num2;
// }

// console.log([4, 5, 6, 7].sort(comparatorNum));

// function compareLength(string1, string2) {
//   return string2.length - string1.length;
// }

// console.log(['fish', 'tastes', 'amazingly', 'saltybrrr'].sort(compareLength));


// * Bubble sort-----------------------------
// function bubbleSort(arr) {
//   let noSwaps;
//   for (var i = arr.length; i > 0; i--) {
//     noSwaps = true;
//     for (var j = 0; j < i - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//         noSwaps = false;
//       }
//     }
//     if (noSwaps) break;
//   }
//   return arr;
// }

// let sortMe = [50, 40, 30, 20, 10];
// // * Displaying the result
// let result = bubbleSort(sortMe);
// const output = (document.querySelector('.root').innerHTML = result);
// *** Selection sort -----------------------
// function selectionSort(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     let min = i;
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j] < arr[min]) {
//         min = j;
//       }
//     }
//     if (i !== min) {
//       let temp = arr[i];
//       arr[i] = arr[min];
//       arr[min] = temp;
//     }
//   }
//   return arr;
// }
// let selectMe = [34, 53, 11, 32, 5, 78];
// let result = selectionSort(selectMe).toString().split(',').join(' ');
// const output = (document.querySelector('.root').innerHTML = result);

// *** Insertion sort()---------------------
// function insertionSort(arr) {
//   for (var i = 1; i < arr.length; i++) {
//     var currentVal = arr[i];
//     for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
//       arr[j + 1] = arr[j];
//       console.log(arr.toString());
//     }
//     arr[j + 1] = currentVal;
//   }
//   return arr;
// }



// let selectMe = [12, 53, 9, 32, 5, 78];

// let result = insertionSort(selectMe).toString().split(',').join(' ');
// const output = (document.querySelector('.root').innerHTML = result);
// *** Merge Sort()-------------------------
// function merge(arr1, arr2) {
//   let results = [];
//   let i = 0;
//   let j = 0;
//   while (i < arr1.length && j < arr2.length) {
//     if (arr2[j] > arr1[i]) {
//       results.push(arr1[i]);
//       i++;
//     } else {
//       results.push(arr2[j])
//       j++;
//     }
//   }
//   while (i < arr1.length) {
//     results.push(arr1[i])
//     i++;
//   }
//   while (j < arr2.length) {
//     results.push(arr2[j])
//     j++;
//   }
//   return results;
// }
// *** Merge Sort Recursively
// function mergeSort(arr) {
//   if (arr.length <= 1) return arr;
//   let midPoint = Math.floor(arr.length / 2);
//   let left = mergeSort(arr.slice(0, midPoint));
//   let right = mergeSort(arr.slice(midPoint));
//   return merge(left, right);
// }

// let result = mergeSort([54, 652, 56, 234, 65, 13]).toString().split(',').join(' | ');
// const output = (document.querySelector('.root').innerHTML = result);

// *** Quick Sort
function pivot(arr, start = 0, end = arr.length - 1) {
  function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  let pivot = arr[start];
  let swapIndex = start;

  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIndex++;
      swap(arr, swapIndex, i);
    }
  }
  swap(arr, start, swapIndex);
  return swapIndex;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    // left
    quickSort(arr, left, pivotIndex - 1);
    // right
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

let result = quickSort([8, 7, 4, 5, 3, 6, 1, 2, 9]).toString().split(',').join(' | ');
const output = (document.querySelector('.root').innerHTML = result);