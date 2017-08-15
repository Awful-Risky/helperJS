var undScr   = require('underscore');
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
function populateDirtFullSet (input) {
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
			var pusher = ([
				input[j],
				input[i],
			]);
			console.log(pusher);
			dirtFullSet.push(pusher); 
		}
		
		
		// console.log('BREAK');
	};
	// console.log(dirtFullSet)
};



populateDirtFullSet(players);







