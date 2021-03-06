
angular.module('kizusiApp.reserve', [])

.controller('ReserveController', function($scope, $http, $uibModal, $state){ 
  
  $scope.car = $state.params.car;
	
  console.log($scope.car);
	
  $http.get('/reserve')
	  .then(function(res){
	   console.log(res);
	    $scope.cars = res.data;
      for(var m =0; m < $scope.cars.length; m++)
      {
        if($scope.car._id == $scope.cars[m].vehicle)
        {
         $scope.booked = $scope.cars[m];
          
        }
      }
	  });
  
  
  
  
  $scope.today = function() {
    $scope.dt = new Date();
  };
  $scope.today();

  $scope.clear = function() {
    $scope.dt = null;
  };

  $scope.inlineOptions = {
    customClass: getDayClass,
    minDate: $scope.today(),
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
      });
     $scope.car = '' ;
     $scope.confirm();
     $state.go('home');
    }
   
   $scope.confirm = function()
   { 
    var modalInstance = $uibModal.open({
            templateUrl : 'templates/confirm.html',
            controller  : 'ConfirmController',
            size : 'md'
            
              });
   }
   
})
.controller('ConfirmController', 
    function ($http , $scope , $uibModalInstance) { 
  
  $scope.ok = function () {
    $uibModalInstance.close();
  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
})
