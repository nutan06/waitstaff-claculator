var myApp=angular.module('waitStaff',[])
myApp.controller('calculatorController',function($scope){

	var init=function(){
		$scope.Data={};
		$scope.charges={};
		$scope.earning={};

		$scope.charges.subTotal=0;
		$scope.charges.tip=0;
		$scope.charges.total=0;

		$scope.earning.totalTip=0;
		$scope.earning.mealCount=0;
		$scope.earning.avgTip=0;
		$scope.submitted=false;
	};

	init();

	var calculate=function(){
		/*--Calculations for charges--*/
		$scope.charges.subTotal=($scope.Data.price * (1 + $scope.Data.tax/100));
		$scope.charges.tip=(($scope.charges.subTotal)* ($scope.Data.tip/100));
		$scope.charges.total=$scope.charges.subTotal+$scope.charges.tip;

		/*--Calculations for total earnings--*/
		$scope.earning.totalTip+=$scope.charges.tip;
		$scope.earning.mealCount++;
		$scope.earning.avgTip=$scope.earning.totalTip/$scope.earning.mealCount;
	};

	$scope.validate=function(){
		if($scope.mealData.$valid){
			calculate();
		}
	}
	$scope.clear=function(){
		$scope.Data={};
		$scope.charges.subTotal=0;
		$scope.charges.tip=0;
		$scope.charges.total=0;
	}
	$scope.reset=function(){
		$scope.Data={};
		$scope.charges.subTotal=0;
		$scope.charges.tip=0;
		$scope.charges.total=0;
		$scope.earning.totalTip=0;
		$scope.earning.mealCount=0;
		$scope.earning.avgTip=0;
	}
});