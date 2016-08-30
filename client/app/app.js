angular.module('skool', ['ui.router', 'skool.supController'])
// .config(function ($routeProvider, $httpProvider) {
  .config(function ($stateProvider, $urlRouterProvider) {
    // $urlRouterProvider.otherwise("/sup/");
    //$urlRouterProvider.otherwise("/skool/");
    $stateProvider
      .state('sup', {
        url: "/sup",
        templateUrl: "app/sup/sup.html",
        controller: 'supController',
        controller: 'famController'
      })
      .state('home' , {
        url: "/home",
        templateUrl: "../pages/home.html"
      })
      .state('test' , {
        url: "/test",
        templateUrl: "../pages/test.html",
        controller: 'mainController',
        controller: 'Cat',
        controller: 'Habib',
        controller: 'Kids'
      })
  })
  .run(function($rootScope){
    $rootScope.$on('$stateChange', function(){
      console.log('STATE HAS CHANGED!!!');
    })
  });






