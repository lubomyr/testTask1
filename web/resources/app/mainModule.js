var mainModule = angular.module('mainModule', ['ui.bootstrap']);

define([
    'resources/app/CompanyService',
    'resources/app/CompanyController',
    'resources/app/modal/AddingNewCompanyModalController',
    'resources/app/modal/EditCompanyModalController',
    'resources/app/modal/ViewCompanyModalController',
    'resources/app/modal/DeleteCompanyModalController'
]);
