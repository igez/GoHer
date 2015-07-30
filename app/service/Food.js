(function() {

	var Food = angular.module('GoHer.Service.Food', []);

	Food.service('$food', ['$http', function($http) {
		this.get = function(callback) {
			$http
				.get('public/data/food.json')
				.success(callback);
		}
	}]);

})();