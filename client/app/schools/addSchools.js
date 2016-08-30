angular.module('skool.addSchools', [])
  .factory('schoolFactory', function($http, $q){
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

    var makeUrl = function() {

    }

    service.callGreatSchools = function() {
      makeUrl();
    }
    return service;
  })
  .controller('addSchoolsController', function($scope, $state, schoolFactory){
    $scope.dhikr = '';
    $scope.schoolName = '';
    $scope.updateList = function() {
      schoolFactory.submitSchool($scope.schoolName);
      $state.go('favorites');
    };
    $scope.list = schoolFactory.getSchools();
    $scope.display = function(school) {
      $scope.displayTitle = 'Demographics for ' + school;
      $scope.daSchool = school;
    }
  });


