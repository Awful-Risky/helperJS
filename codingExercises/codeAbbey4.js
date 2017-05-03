var inputArray1 = [1,8,100];
var inputArray2 = [3,8,15];

function minOf2ArraysAtIndex (arr1, arr2) {
	let min = [];
	for (let i = 0; i < arr1.length; i++) {
		if (arr1[i] <= arr2[i]) {
			min.push(arr1[i]);
		}
		else {
			min.push(arr2[i])
		};
	};
	return min
};
console.log(minOf2ArraysAtIndex(inputArray1, inputArray2)); //[1,8,15]