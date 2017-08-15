var undScr   = require('underscore');
//npm install --save undersacore 

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


var newArray = [];


//Populate all possible combinations - *** Including duplicates
function populateDirtFullSet (input) {
	// dirtyFull list of all possible combos
	for (var i = 0; i < input.length; i++) {
		// console.log(i)
		var match = (input[i])
		// console.log(match)
		for (var j = 0; j < input.length; j++) {
			if (input[j] !== input[i]) {
				var pusher = ({
					p1 : input[j],
					p2 : input[i],
				})
			}
		}
		newArray.push(pusher);
		console.log(pusher); 
		console.log('BREAK');
	};
};

populateDirtFullSet(players);