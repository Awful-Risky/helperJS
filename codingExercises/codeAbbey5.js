var inputArray1 = [7,15,800];
var inputArray2 = [3,20,550];
var inputArray3 = [5,40,137];

function minOf3ArraysAtIndex (arr1, arr2, arr3) {
	let min = [];
	for (let i = 0; i < arr1.length; i++) {
		if (arr1[i] <= arr2[i]) {
			if (arr1[i] <= arr3[i]) {
				min.push(arr1[i]);
			}
			else {
				min.push(arr3[i]);
			}
		}
		else if (arr2[i] <= arr3[i]){
			min.push(arr2[i])
		}
		else {
			min.push(arr3[i])
		}
	};
	return min
};
console.log(minOf3ArraysAtIndex(inputArray1, inputArray2, inputArray3)); //[3,15,137]
