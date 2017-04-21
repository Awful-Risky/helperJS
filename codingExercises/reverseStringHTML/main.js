// console.log('Hello World');
// console.log(angular);



angular.module('angBasic', []); // Creating a module called angBasic


// Register a controller to the module
angular.module('angBasic').controller('angTroller', [
	'$scope', 
	function($scope) {
		console.log('Hello World');
		console.log(angular);
		$scope.testScope = 'Your On $Scope';

}]);