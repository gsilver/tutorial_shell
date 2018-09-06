var tutorialApp = angular.module( "tutorialApp", ["ngRoute"] );

tutorialApp.config(function($routeProvider, $locationProvider) {

    $routeProvider
    .when("/", {
        templateUrl : "views/0.html"
    })
    .when("/1", {
        templateUrl : "views/1.html"
    })
    .when("/2", {
        templateUrl : "views/2.html"
    })
    .when("/3", {
        templateUrl : "views/3.html"
    })
    .when("/4", {
        templateUrl : "views/4.html"
    })
    .when("/5", {
        templateUrl : "views/5.html"
    })
    .when("/6", {
        templateUrl : "views/6.html"
    })
    .when("/7", {
        templateUrl : "views/7.html"
    })
    .when("/8", {
        templateUrl : "views/8.html"
    })
    .when("/9", {
        templateUrl : "views/9.html"
    });
});
