'use strict';

angular
.module('GoHer', [
	'ui.router',
    'GoHer.Dashboard',
    'GoHer.Order'
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
            templateUrl : 'public/views/partials/dashboard.html',
            controller  : 'DashboardController'
        })
        .state('root.order_index', {
        	url 		: '/orders',
            templateUrl : 'public/views/partials/order.html',
            controller  : 'OrderController'
        })

    // $locationProvider.html5Mode(true);
})