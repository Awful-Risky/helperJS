// console.log(typeof(22/7))
var num = (0.1)
var negNum = (-22/7)
// console.log('Original Number', num)
// console.log(num % 1)

function roundItUp (it) {
	if (it > 0) {
		if (it % 1 == 0.0) {
			return it
		}
		else {
			// console.log(it % 1)
			let roundedIt = it;
			let roundUpDifference = 1.0 - (it % 1)
			// console.log(roundUpDifference)
			roundedIt += roundUpDifference
			return roundedIt
		}
	}
	else {
		// console.log('is it negative', it)
		// console.log(it -= it % 1)
		return (it -= it % 1);  //Javascript is funny this way...subtract neg num with neg num to increase value???
	}
}

console.log('Pos rounded up:',num,'=', roundItUp(num));
console.log('Neg rounded up :',negNum,'=', roundItUp(negNum));
