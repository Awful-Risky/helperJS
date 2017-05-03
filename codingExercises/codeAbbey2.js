var inputArray = [10, 20, 30, 40, 5, 6, 7, 8]; //126

var sumUp = 0;
for (var i = 0; i < inputArray.length; i++) {
	console.log('Es5', inputArray[i]);
	sumUp += inputArray[i];
};
console.log('1st', sumUp);


//Now make it a function using ECMAScript6:
function sum (inputArray) {
	let sumUp = 0;
	for (let i = 0; i < inputArray.length; i++) {
		console.log('Es6', inputArray[i]);
		sumUp += inputArray[i];
	};
	console.log('In the Es6 loop', sumUp);
	return sumUp;
};

console.log('Old SumpUp', sumUp);  //Prints the var sumUp
console.log(sum(inputArray));



