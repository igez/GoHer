(function(window, undefined) {
'use strict';

var App = angular.module('VT-Training', []);

App.controller('ctrlName', function($scope) {
	$scope.count = 1;
	$scope.message = '';

	$scope.moreBeer = function() {
		$scope.count += 1;

		if ( $scope.count >= 5 && $scope.count < 10 )
			$scope.message ="Too much beer !";

		if ( $scope.count >= 10 )
			$scope.message = "STAAAAHHHP !!!!";
	}
});

App.service('BeerService', function() {
	this.sayBeer = function() {
		return "Beer!";
	}
	this.sayHello = function() {
		return "Hello";
	}
	this.sayBoth = function() {
		return this.sayHello() + ' ' + this.sayBeer(); // returns "Hello Beer!";
	}
	this.getBeer = function() {
		return this.sayBeer();
	}
});

App.controller('serviceController', function($scope, BeerService) {
	$scope.sayBeer = function() {
		alert( BeerService.sayBeer() );
	}
	$scope.sayHello = function() {
		alert( BeerService.sayHello() );
	}

	$scope.sayBoth = function() {
		alert( BeerService.sayBoth() );
	}
});

App.controller('someController', function($scope, BeerService) {
	$scope.getBeer = function() {
		alert( BeerService.getBeer() );
	}
});

App.directive('beerDir', function() {
  return {
    template: 'This beer is not so bad ;)'
  };
});

App.controller('beerController', ['$scope', function($scope) {
  $scope.myBeerCollection = [
    { name: 'Carlsberg', grade: 'good'},
    { name: 'Bintang', grade: 'great'},
    { name: 'Guinness', grade: 'not my taste'}
  ];
}])
.directive('myBeer', function() {
  return {
    controller: 'beerController',
    restrict: 'E',
    templateUrl: 'includes/my-beer.html'
  };
});
})();
