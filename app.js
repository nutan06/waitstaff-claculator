var myApp=angular.module('waitStaff',['ngRoute']);

myApp.config(['$routeProvider',function($routeProvider){
	$routeProvider
	.when('/detail',{
		templateUrl:'./detail.html',
		controller:'detailsCtrl'
	})
	.when('/new-meal',{
		templateUrl:'./new-meal.html',
		controller:'mealCtrl'
	})
	.when('/my-earning',{
		templateUrl:'./my-earning.html',
		controller:'mealCtrl'
	})
	.when('/error', {
		      template : '<p>Error Page Not Found</p>'
		});
}]);
