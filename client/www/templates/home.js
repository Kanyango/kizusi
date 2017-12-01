angular.module('kizusiApp.home', [])

.controller('HomeController', function($scope, $http, $uibModal, $state){
	$scope.myInterval = 3000;
        $scope.noWrapSlides = false;
        $scope.active = 0;
        $scope.slides = [
		           {image: "http://res.cloudinary.com/dxomvhu0p/image/upload/v1487777819/jx2mb10tgymivgmgzoj7.jpg"},
			   {image: "http://res.cloudinary.com/dxomvhu0p/image/upload/v1487777204/h7xcz1rbiiljbds3vnpi.jpg"},
			   {image: "http://res.cloudinary.com/dxomvhu0p/image/upload/v1487837806/sefxgsmhmuamyuf0glay.jpg"},
			   {image: "http://res.cloudinary.com/dxomvhu0p/image/upload/v1487837525/pstowvzzb9w40mguipzf.jpg"}
	                ];
	 

	$http.get('/car')
	.then(function(res){

		$scope.cars = res.data;
		console.log($scope.cars);
	});

	$scope.view = function(car)
        {
            var modalInstance = $uibModal.open({
            templateUrl : 'templates/viewcar.html',
            controller  : 'CarViewerController',
            size : 'lg',
            resolve : {

                car : function() {
                    return  car;
                }
            }
        });
    };
    $scope.reserve = function(car)
        {
            $state.go("reserve", {car: car})    
        };
})
.controller('ConfirmController', 
    function ($http , $scope , $uibModalInstance2) { 
  
  $scope.ok = function () {
    $uibModalInstance2.close();
  };

  $scope.cancel = function () {
    $uibModalInstance2.dismiss('cancel');
  };
})
.controller('CarViewerController', 
    function ($http , $scope , $uibModalInstance, car ) { 

  	
  $scope.car = car;
  $scope.car.model = car.model;
  $scope.car.plate_no  = car.plate_no;
  
  $scope.ok = function () {
    $uibModalInstance.close();
  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
})
/*.controller('ReserveController', 
    function ($http , $scope , $uibModalInstance, car ) { 

  $scope.car = car;

  $scope.today = function() {
    $scope.dt = new Date();
  };
  $scope.today();

  $scope.clear = function() {
    $scope.dt = null;
  };

  $scope.inlineOptions = {
    customClass: getDayClass,
    minDate: new Date(),
    showWeeks: true
  };

  $scope.dateOptions = {
    formatYear: 'yy',
    maxDate: new Date(2020, 5, 22),
    minDate: new Date(),
    startingDay: 1
  };

  // Disable weekend selection

  $scope.toggleMin = function() {
    $scope.inlineOptions.minDate = $scope.inlineOptions.minDate ? null : new Date();
    $scope.dateOptions.minDate = $scope.inlineOptions.minDate;
  };

  $scope.toggleMin();

  $scope.open1 = function() {
    $scope.popup1.opened = true;
  };

  $scope.open2 = function() {
    $scope.popup2.opened = true;
  };

  $scope.setDate = function(year, month, day) {
    $scope.rent.start = new Date(year, month, day);
  };
  $scope.setDate = function(year, month, day) {
    $scope.rent.end = new Date(year, month, day);
  };

  $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
  $scope.format = $scope.formats[0];
  $scope.altInputFormats = ['M!/d!/yyyy'];

  $scope.popup1 = {
    opened: false
  };

  $scope.popup2 = {
    opened: false
  };

  var tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  var afterTomorrow = new Date();
  afterTomorrow.setDate(tomorrow.getDate() + 1);
  $scope.events = [
    {
      date: tomorrow,
      status: 'full'
    },
    {
      date: afterTomorrow,
      status: 'partially'
    }
  ];

  function getDayClass(data) {
    var date = data.date,
      mode = data.mode;
    if (mode === 'day') {
      var dayToCheck = new Date(date).setHours(0,0,0,0);

      for (var i = 0; i < $scope.events.length; i++) {
        var currentDay = new Date($scope.events[i].date).setHours(0,0,0,0);

        if (dayToCheck === currentDay) {
          return $scope.events[i].status;
        }
      }
    }

    return '';
  }

   $scope.reserve = function() 
  {
    $http.post('/ressms', $scope.car)
    .then(function(res){
      $scope.sms = res.data;
      console.log($scope.sms);
    });
  };

  $scope.ok = function () {
    $uibModalInstance.close();
  };
  $scope.popup1 = {
    opened: false
  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
})*/
