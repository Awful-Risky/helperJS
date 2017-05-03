var inputArry = [2,999,99,44,33,55,77,1000,1]


function maxMinOfArray (arr) {
	let max = arr[0];
	let min = arr[0];
	let maxMin= [];
	for (let i = 0; i <arr.length; i++) {
		if (arr[i] < min) {
			min = arr[i]
		}
		if (arr[i] > max) {
			max = arr[i]
		}
	};
	maxMin.push(max);
	maxMin.push(min);
	return maxMin
}
console.log(maxMinOfArray(inputArry));