angular.module('kizusiApp.admin',
              ['kizusiApp.adminreserve',
	           'kizusiApp.car',
	           'kizusiApp.newpass'
	           ])

.config(function($stateProvider){

	$stateProvider
	.state('admin',
		    {
		     url: '/admin',
		     templateUrl: 'templates/admin/admin.html',
		     controller : 'AdminController'
		  })
	.state('newpass',
		    {
		     url: '/newpass',
		     templateUrl: 'templates/admin/newpass.html',
		     controller : 'NewPassController'
		  })
	.state('adminreserve',
		    {
		     url: '/adminreserve',
		     templateUrl: 'templates/admin/reservations.html',
		     controller : 'AdminReservationsController'
		  })
	.state('car',
		   {
		   	 url  : '/car',
		     templateUrl : 'templates/admin/car.html',
			 controller  : 'AdminCarsController'

	      });

})
.controller('AdminController', function($scope, $http, auth, $state){
	$scope.user = {};
	//$state.go('login')
	//console.log('Iam auth guy ' + auth.isLoggedIn());
	if(auth.isLoggedIn() == false)
	{
		$state.go('login');
		//console.log('Iam auth guy ' + auth.isLoggedIn());
	}
	$scope.isLoggedIn = auth.isLoggedIn;
	$scope.currentUser = auth.currentUser;
	$scope.logOut = auth.logOut;


	$http.get('/reserved')
	.then(function(res){

		$scope.reserved = res.data;
		$scope.total = $scope.reserved.length;
		console.log($scope.reserved);
	});

	$http.get('/available')
	.then(function(res){

		$scope.available = res.data;
		$scope.totalav = $scope.available.length;
		console.log($scope.available);
	});
	
	$http.get('/rent_out')
	.then(function(res){

		$scope.requests = res.data;
		$scope.total_rent = $scope.requests.length;
		
	});

	$http.get('/reserve')
	.then(function(res){

		$scope.cust = res.data;
		$scope.total3 = $scope.cust.length;
		console.log($scope.cust);
	});
});
