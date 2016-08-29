angular.module('skool', ['ngRoute', 'skool.supController'])
// .config(function ($routeProvider, $httpProvider) {
  .config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateURL: '../pages/home.html'
    })
    .when('/test', {
      templateURL: '../test.html',
      // try adding more controllers if this works
    })
    .when('/sup', {
      templateURL: 'app/sup/sup.html',
    })
    .otherwise('/', {
      redirectTo: '/sup'
    })

});

