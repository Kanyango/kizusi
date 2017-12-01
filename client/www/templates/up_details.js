angular.module('kizusiApp.uploadetails', ['ngFileUpload'])

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

.controller('UploadDetailsController', function($scope,$http,Upload, $uibModal, $window,){ 
 
                
             $scope.submit = function(){ //function to call on form submit
                    if ($scope.upload_form.file.$valid && $scope.file) { //check if from is valid
                        $scope.upload($scope.file); //call upload function
                    }
            };
  
              $scope.upload = function (file) {
                  Upload.upload({
                      url: 'https://kizusiapp.herokuapp.com/uploadDL', //webAPI exposed to upload the file
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
  
   
})
