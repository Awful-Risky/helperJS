var inputArray1 = [100, 15, 1945];
var inputArray2 = [8, 245, 54];

function sumAtIndexOf2Arrays (arr1, arr2) {
	let summedArray = []
	for (let i = 0; i < arr1.length; i++) {
		summedArray.push(arr1[i] + arr2[i]);
	}
	return summedArray
}
console.log(sumAtIndexOf2Arrays(inputArray1, inputArray2)); //[108,260,1999]