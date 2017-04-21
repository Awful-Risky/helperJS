var string = 'word';
var splitString = string.split("");
console.log(splitString);
var reverseString = splitString.reverse().join("");
console.log(reverseString);

var reverseWord = function (word) {
	// var splitWord = word.split("");
	// console.log(splitWord);
	// var reverseSplit = splitWord.reverse().join("");
	// console.log(reverseSplit);
	// console.log(word.split("").reverse().join(""));
	return (word.split("").reverse().join(""));
}

console.log(reverseWord('apple'));
