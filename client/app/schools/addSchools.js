angular.module('skool.addSchools', [])
  .factory('schoolFactory', function(){
    var service = {};

    var hero = 'batman';

    service.schoolName = '';
    list = [];

    service.getHero = function() {
      return hero;
    }

    service.submitSchool = function(schoolName) {
      service.schoolName = schoolName;
      if (service.schoolName) {
        list.push(service.schoolName);
        service.schoolName = '';
      }
    }

    service.getSchools = function() {
      return list;
    }
    return service;
  })
  .controller('addSchoolsController', function($scope, $state, schoolFactory){
    $scope.schoolName = '';
    $scope.updateList = function() {
      schoolFactory.submitSchool($scope.schoolName);
    };
    $scope.list = schoolFactory.getSchools();
  });


  // $state.go('favorites');