

angular.module('meanBasic', []);

angular.module('meanBasic').controller('meanTroller', [
	'$scope',
	'$http',
	function($scope, $http) {
		console.log('Hello World');
		console.log(angular);
		$scope.testScope = 'Your On $Scope';

		$http({
		    method : 'POST',
		    url    : '/mongoTest',
		    // data   : {string : 'string'},
		}).then(function(returnData){
		    // console.log('^^^^^^^ -->', returnData.data)
		    if (returnData.data) {
		    	$scope.savedMongoString = returnData.data 
		    }
		})


	}]);