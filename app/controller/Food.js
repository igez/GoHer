(function() {
	'use strict';

	var Food = angular.module('GoHer.Food', ['GoHer.Service.Food']);

	Food.controller('FoodController', ['$scope', '$food', function($scope, $food) {
		$food.get(function(result) {

			$scope.results = result.foods;

		});
		$scope.orderProp = 'age';
	}]);

})();