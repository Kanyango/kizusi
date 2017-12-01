angular.module('kizusiApp.login', ['kizusiApp.admin'])

.controller('LoginController', function($scope, $http , auth , $state , $location ){

	$scope.user = {};
		
		$scope.login = function()
		{
			auth.login($scope.user)
			.then(function(res){
			//$scope.suc  = res.data;
			//console.log($scope.suc);
		        $state.go('admin');
			});
		};

});
