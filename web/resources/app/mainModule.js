var mainModule = angular.module('mainModule', ['ngRoute', 'ngCookies']);

mainModule.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/company', {
                templateUrl: 'resources/app/home.html',
                controller: 'CompanyController'
            })
    }]);

define([
    'resources/app/CompanyService',
    'resources/app/CompanyController'
]);
