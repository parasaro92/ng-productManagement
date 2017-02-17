var myApp = angular.module('myApp',['ngRoute', 'ngResource','ngAnimate', 'ngAria', 'ngMaterial', 'md.data.table']);

myApp.config(['$routeProvider','$httpProvider', function($routeProvider, $httpProvider) {

  $routeProvider.
    when('/', {
      templateUrl: 'pages/product.html',
      controller: 'ProductListCtrl',
      controllerAs: 'vm'
    }).
    otherwise({
      redirectTo: '/'
    });
}]);