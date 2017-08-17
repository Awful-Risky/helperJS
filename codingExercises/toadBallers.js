var _score   = require('underscore');
//npm install --save undersacore 




var dirtFullSet = [];
var players = ['a',
			   'b',
			   'c',
			   'd',
			   'e',
			   'f',
			   'g',
			   'h',
			   'i',
			   'j',
			   'k',
			   'l'];


//Populate all possible combinations-Including duplicates
function dirtPopulateFullSet (input) {
	
	// dirtyFull list of all possible combos
	for (var i = 0; i < input.length; i++) {
		// console.log(i)
		// var match = (input[i])
		// console.log(match)
		for (var j = 0; j < input.length; j++) {
			// if (input[j] !== input[i]) {
			// 	var pusher = ([
			// 		input[j],
			// 		input[i],
			// 	]);
			// }
			var pusher = ([input[j],input[i]]);
			dirtFullSet.push(pusher);
			 
		}
		
		
		// console.log('BREAK');
	};
	// console.log(dirtFullSet)
	return dirtFullSet;
};



var test = dirtPopulateFullSet(players);
// console.log(test);



var diffArray = [];
function cleanSetUnique (inputSet) {
	for (var i = 0; i < inputSet.length; i++) {
		for (var j = 0; j < inputSet.length; j++) {
			var concat = inputSet[i].concat(inputSet[j]);
			var unique = _score.uniq(concat);
			console.log ('Testong...', unique)
			//Working on it
			// for (var k = 0; k < unique.length; k++) {
			// 	if (unique[k].length < 3) {
			// 		diffArray.push(unique[k])
			// 	}
			// };
			// if (concat.unig < 3 please push to new array for differenicing on the original array to create a unique set of A,E combos) {};
		};
	};

};

cleanSetUnique(test);

//One of my favorite business quotes...From Carolynn Johnston:"Yeah :),...Unix is power"

//Now I have an input array with duplicate values (a,a = a,a) (l,e = l,e) and meaning (a,e = e,a)
// for i in fullArray (of [a,b] sets)
// 	for j in fullArray
// 		if i concat j.uniq.length < 3...push to new array and then difference at the end?
// 			array[i].concat(array[j]).undScr.uniq.length
