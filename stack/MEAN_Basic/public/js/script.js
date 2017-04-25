

angular.module('meanBasic', []);

angular.module('meanBasic').controller('meanTroller', [
	'$scope',
	'$http',
	function($scope, $http) {
		console.log('Hello World');
		console.log(angular);
		$scope.testScope = 'Your On $Scope';
	}]);