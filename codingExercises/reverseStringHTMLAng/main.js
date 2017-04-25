// console.log('Hello World');
// console.log(angular);



angular.module('angBasic', []); // Creating a module called angBasic


// Register a controller to the module
angular.module('angBasic').controller('angTroller', [
	'$scope', 
	function($scope) {
		// console.log('Hello World');
		// console.log(angular);
		// $scope.testScope = 'Your On $Scope';

		var reverseWord = function (word) {
		// var splitWord = word.split("");
		// console.log(splitWord);
		// var reverseSplit = splitWord.reverse().join("");
		// console.log(reverseSplit);
		// console.log(word.split("").reverse().join(""));
			return (word.split("").reverse().join(""));
		};

		//ng-click 
		$scope.reverse = function (string) {
			//brings the returns of reverseWord onto scope/binding with angular
			$scope.what = reverseWord(string)
		};
	};
]);