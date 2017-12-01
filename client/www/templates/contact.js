angular.module('kizusiApp.contact', [])

.controller('ContactController', function($scope, NgMap, $state, $http){

	$scope.mail = {};

	$scope.googleMapsUrl="https://maps.googleapis.com/maps/api/js?key=AIzaSyCsuGIJdVor_CBVRJ7Qffm7iEFJecVAHHk";

	NgMap.getMap().then(function(map) {
    console.log(map.getCenter());
    console.log('markers', map.markers);
    console.log('shapes', map.shapes);
  });
 
 $scope.save = function() {

 	//$http.post('/mails', $scope.mail)
 	$state.go('home');
 	
  
}

  
});
