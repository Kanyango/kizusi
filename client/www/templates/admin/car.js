angular.module('kizusiApp.car', [])
.directive('ngFiles', ['$parse', function ($parse) {

            function fn_link(scope, element, attrs) {
                var onChange = $parse(attrs.ngFiles);
                element.on('change', function (event) {
                    onChange(scope, { $files: event.target.files });
                });
            };

            return {
                link: fn_link
            }
        } ])
.directive('fileModel', ['$parse', function ($parse) {
            return {
               restrict: 'A',
               link: function(scope, element, attrs) {
                  var model = $parse(attrs.fileModel);
                  var modelSetter = model.assign;
                  
                  element.bind('change', function(){
                     scope.$apply(function(){
                        modelSetter(scope, element[0].files[0]);
                     });
                  });
               }
            };
         }])
.service('fileUpload', ['$http', function ($http) {
        this.uploadFileToUrl = function(file, uploadUrl){
           var fd = new FormData();
           fd.append('file', file);
 
           $http.post(uploadUrl, fd, {
              transformRequest: angular.identity,
              headers: {'Content-Type': undefined 
                      }
           })
           .then(function(response){
            var pload = response.data;
            console.log(pload);
            for(var l = 0; l < pload[0].length; l++)
              { 
                  console.log(pload[0][l]) 
              }
              this.k = pload[0];
              console.log(this.k);
            /*$http.post('/exel', this.k , 
              {headers:{Authorization: 'Bearer ' + auth.getToken()}})
            .then(function(res){
              var ploady = res.data;
              console.log(ploady);
            });*/
           });
        }
     }])

.controller('AdminCarsController', function($scope, $http, $uibModal){

  $http.get('car')
  .then(function(res){
    $scope.cars = res.data;
    $scope.totalItems = $scope.cars.length;
    console.log(res.data);
  });
    
    $scope.isNavCollapsed = true;
    $scope.isCollapsed = true;
    $scope.isCollapsedHorizontal = true;

  
  $scope.currentPage = 1;
    $scope.numPerPage = 5;

	$scope.create = function()
        {
            var modalInstance = $uibModal.open({
            templateUrl : 'templates/admin/createcar.html',
            controller  : 'CreateCarController',
            size        : 'lg'
        });
    }

  $scope.upload = function(id)
        {
            var modalInstance = $uibModal.open({
            templateUrl : 'templates/admin/upload.html',
            controller  : 'UploadCarModalController',
            size : 'lg',
            resolve : {

                select : function() {
                    return  id;
                }
            }
        });
    } 


  $scope.edit = function(car)
        {
            var modalInstance = $uibModal.open({
            templateUrl : 'templates/admin/editcar.html',
            controller  : 'EditCarModalController',
            size : 'md',
            resolve : {

                select : function() {
                    return  car;
                }
            }
        });
    }
     $scope.pricing = function(car)
        {
            var modalInstance = $uibModal.open({
            templateUrl : 'templates/admin/pricing.html',
            controller  : 'PricingController',
            size : 'lg',
            resolve : {

                select : function() {
                    return  car;
                }
            }
        });
    }
  $scope.del = function(del)
  {
    $http.delete('/car' + del);
  }

 /* $scope.reserve = function()
  {

    $http.post('/reserve', $scope.client)
    .then(function(res){
      $scope.sema = res.data;
      console.log( $scope.sema);
    });
  }	 */
})
.controller('CreateCarController', 
    function ($http , $scope , $uibModalInstance ) { 
   
  $scope.car = {};

  $scope.save = function()
  {

    $http.post('/car', $scope.car)
    .then(function(res){
      $scope.sema = res.data;
      console.log( $scope.sema);
    });
  } 


  $scope.ok = function () {
    $uibModalInstance.close();
  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
})
.controller('UploadCarModalController', 
    function ($http , $scope , $uibModalInstance, select, Upload, $window ) { 

      var id = select;

      $scope.submit = function(){ //function to call on form submit
        if ($scope.upload_form.file.$valid && $scope.file) { //check if from is valid
            $scope.upload($scope.file); //call upload function
        }
    };

    $scope.upload = function (file) {
        Upload.upload({
            url: 'https://kizusi.herokuapp.com/upload' + id, //webAPI exposed to upload the file
            data:{file:file} //pass file as data, should be user ng-model
        }).then(function (resp) { //upload function returns a promise
            if(resp.data.error_code === 0){ //validate success
                $window.alert('Success ' + resp.config.data.file.name + 'uploaded. Response: ');
            } else {
                $window.alert('an error occured');
            }
        }, function (resp) { //catch error
            console.log('Error status: ' + resp.status);
            $window.alert('Error status: ' + resp.status);
        }, function (evt) { 
            console.log(evt);
            var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
            console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
            $scope.progress = 'progress: ' + progressPercentage + '% '; // capture upload progress
        });
    };


   $scope.uploadFile = function(){
           var file = $scope.myFile;
           var uploadUrl = "/upload";
           fileUpload.uploadFileToUrl(file, uploadUrl);
        };
   
  $scope.car = {};
  

   var formdata = new FormData();
            $scope.getTheFiles = function ($files) {
                angular.forEach($files, function (value, key) {
                    formdata.append(key, value);
                });
            };

            // NOW UPLOAD THE FILES.
            $scope.uploadFiles = function () {

               /* var request = {
                    method: 'POST',
                    url: '/upload',
                    data: formdata,
                    headers: {
                        'Content-Type': undefined
                    }
                }; */

                // SEND THE FILES.
                $http.post('/upload' + id,  formdata, {headers: {'Content-Type': undefined}})
                    .then(function (d) {
                        alert(d);
                    });
            }

  $scope.save = function()
  {

    $http.post('/upload', $scope.car)
    .then(function(res){
      $scope.sema = res.data;
      console.log( $scope.sema);
    });
  } 


  $scope.ok = function () {
    $uibModalInstance.close();
  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
})
.controller('EditCarModalController', 
    function ($http , $scope , $uibModalInstance, select ) { 
	
  $scope.car = {};
  $scope.car = select;
	console.log(select);
  $scope.update = function(car)
  {	
	console.log(car);
	  $scope.car = car;
    $http.put('/car/' + $scope.car._id, $scope.car);
  }
 
  $scope.ok = function() {
    $uibModalInstance.close();
  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
})
.controller('PricingController', 
    function ($http , $scope , $uibModalInstance, select ) { 

  $scope.car = select;

  $scope.item = {};
  $scope.inputs = [{ 
                     'desc' :"",
                     'amount' :""
                   }];

  $scope.formData = {};
  $scope.formData.inputs = $scope.inputs;
  $scope.formData.id = $scope.car._id;

  console.log($scope.formData.id);

  $scope.add = function()
  {
    $scope.inputs.push({
            
      'desc' :"",
      'amount' :""
    });

  }

   $scope.remove = function()
    {
        $scope.inputs.pop({       
              'desc' :"",
              'amount' :""
        })
    }

  $scope.save = function()
  {
    $http.put('/pricing', $scope.formData);
    console.log($scope.formData);
  }

 
  $scope.ok = function() {
    $uibModalInstance.close();
  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
});
