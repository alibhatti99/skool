angular.module('skool', [
  'ui.router',
  'skool.supController',
  'skool.test',
  'skool.schools',
  'skool.addSchools'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
    $stateProvider
      .state('sup', {
        url: "/sup",
        templateUrl: "app/sup/sup.html",
        controller: 'supController',
        controller: 'famController',
        controller: 'Habib'
      })
      .state('home' , {
        url: "/home",
        templateUrl: "../pages/home.html",
        controller: 'locationController'
      })
      .state('test' , {
        url: "/test",
        templateUrl: "../pages/test.html",
        controller: 'mainController',
        controller: 'Cat',
        controller: 'Habib',
        controller: 'Kids'
      })
      .state('favorites', {
        url: '/favorites', // if error:might need to match url and templateUrl
        templateUrl: 'app/schools/schools.html',
        controller: 'schoolsController'
      })
      .state('addSchool', {
        url: '/addSchool',
        templateUrl: 'app/schools/addSchool.html',
        controller: 'addSchoolsController',
        controller: 'schoolsController',
        controller: 'supController',
        controller: 'Habib',
        controller: 'famController'
      })
  });
  // .run(function($rootScope){
  //   $rootScope.$on('$stateChange', function(){
  //     console.log('STATE HAS CHANGED!!!');
  //   })
  // });






