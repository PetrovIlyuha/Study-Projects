// *** IndexOf behind the scenes
// function linearSearch(arr, num) {
// 	for (let i = 0; i < arr.length; i++) {
// 		if (arr[i] === num) return i;
// 	}
// 	return -1;
// }

// let result = linearSearch([ 1, 2, 3, 4, 5, 6 ], 5);

// *** Binary Search
// function binarySearch(arr, val) {
// 	let start = 0;
// 	let end = arr.length - 1;
// 	let middle = Math.floor((start + end) / 2);
// 	while (arr[middle] !== val) {
// 		console.log(start, middle, end);
// 		if (val <= arr[middle]) {
// 			end = middle - 1;
// 		} else {
// 			start = middle + 1;
// 		}
// 		middle = Math.floor((start + end) / 2);
// 	}
// 	console.log(start, middle, end);
// 	return middle;
// }

function binarySearch(arr, elem) {
	let sortArr = arr.sort((a, b) => a - b);
	var start = 0;
	var end = sortArr.length - 1;
	var middle = Math.floor((start + end) / 2);
	while (sortArr[middle] !== elem && start <= end) {
		if (elem < sortArr[middle]) end = middle - 1;
		else start = middle + 1;
		middle = Math.floor((start + end) / 2);
	}
	return sortArr[middle] === elem ? middle : -1;
}

let testArr = [ 4, 6, 56, 78, 454 ];

let result = binarySearch(testArr, 56);
console.log(result);

