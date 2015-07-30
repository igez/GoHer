'use strict';

angular
.module('GoHer', [
	'ui.router',
    'GoHer.Dashboard',
    'GoHer.Order',
    'GoHer.Food'
])

// Config :: Route provider
.config(function($stateProvider, $locationProvider, $urlRouterProvider) {
    $urlRouterProvider
        .when('', '/')
        .otherwise('/');
	$stateProvider
        .state('root', {
            templateUrl : 'public/views/master.html'
        })
        .state('root.dashboard', {
        	url 		: '/',
            templateUrl : 'public/views/partials/dashboard/index.html',
            controller  : 'DashboardController'
        })
        .state('root.order_index', {
        	url 		: '/orders',
            templateUrl : 'public/views/partials/order/index.html',
            controller  : 'OrderController'
        })
        .state('root.food_index', {
            url         : '/food-and-drink',
            templateUrl : 'public/views/partials/food/index.html',
            controller  : 'FoodController'
        })

    // $locationProvider.html5Mode(true);
})