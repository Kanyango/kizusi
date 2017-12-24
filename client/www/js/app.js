angular.module('kizusiApp',
	['ui.router',
	 'ngMap',
	 'ui.bootstrap',
	 'ngSanitize',
	 'ngFileUpload',
	 'angularFileUpload',
	 'kizusiApp.auth',
	 'kizusiApp.home',
	 'kizusiApp.policy',
	 'kizusiApp.contact',
	 'kizusiApp.login',
	 'kizusiApp.reserve',
	 'kizusiApp.uploadetails'
	 ])
.config(function($stateProvider , $urlRouterProvider , $httpProvider){

	$stateProvider
	/*.state('home',
		    {
		     url: '/home',
		     templateUrl: 'templates/home.html',
		     controller: 'HomeController'
		  })
	.state('policy',
		    {
		     url: '/policy',
		     templateUrl: 'templates/policy.html',
		     controller: 'PolicyController'
		  })
	.state('contact',
		    {
		     url: '/contact',
		     templateUrl: 'templates/contact.html',
		     controller: 'ContactController'
		  })
	.state('services',
		    {
		     url: '/services',
		     templateUrl: 'templates/services.html'
		  })*/
	.state('login',
		    {
		     url: '/login',
		     templateUrl: 'templates/admin/login.html',
		     controller: 'LoginController'
		  })
	.state('uploadetails',
		    {
		     url: '/uploadetails',
		     templateUrl: 'templates/up_details.html',
		     controller: 'UploadDetailsController'
		  })
	.state('reserve',
		    {
		     url: '/reserve',
		     templateUrl: 'templates/reserve.html',
		     params: {car: null},
		     controller: 'ReserveController'
		  })
	


	$urlRouterProvider.otherwise('/login');
});
