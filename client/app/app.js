angular.module('skool', [
  'ui.router',
  'skool.supController',
  'skool.test'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
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
  });
  // .run(function($rootScope){
  //   $rootScope.$on('$stateChange', function(){
  //     console.log('STATE HAS CHANGED!!!');
  //   })
  // });






