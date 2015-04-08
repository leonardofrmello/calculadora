// Ionic Starter App
	
// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
	var app = angular.module('starter', ['ionic', 'servicos'])
	
app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
	app.controller('HomeController', function($scope, getResult){
		
		$scope.soma = function (){
			//alert($scope.val1+$scope.val2);
			//alert($scope.val2);
			getResult($scope.val1,
					  $scope.val2,
					  "soma",
					  function done(result){
					alert(result);
			})}
		
		$scope.divisao = function(){
					 getResult($scope.val1,
					  		   $scope.val2,
					  "divisao",
					  function done(result){
					alert(result);
			})
			}
			
			//alert($scope.val1/$scope.val2);		
		
		$scope.multi = function(){
			//alert($scope.val1*$scope.val2);	
			 getResult($scope.val1,
					  $scope.val2,
					  "multi",
					  function done(result){
					alert(result);
					  })
		}
		
		
		$scope.subtracao = function(){
			//alert($scope.val1-$scope.val2);
		 getResult($scope.val1,
					  $scope.val2,
					  "subtracao",
					  function done(result){
					alert(result);
					  })
		}
})
		
				
