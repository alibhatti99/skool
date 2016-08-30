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

    var currentSchool = '';
    service.setCurrentSchool = function (school) {
      currentSchool = school;
    }

    var baseUrl = 'https://api.greatschools.org/search/schools?key=kecrlimecxxkwfwwbtyjagxx&state=CA&q=';
    var endUrl = '&sort=alpha&levelCode=elementary-schools&limit=10';
    var finalUrl = '';

    var makeSearchUrl = function() {
      currentSchool = currentSchool.split(' ').join('+');
      finalUrl = baseUrl + currentSchool + endUrl;
      return finalUrl;
    }
    var makeDemoUrl = function() {

    }

    service.callGreatSchoolsSearch = function() {
      makeSearchUrl();
      var deferred = $q.defer();
      $http({
        method: 'GET',
        url: finalUrl
      }).success(function(data){
        deferred.resolve(data);
      }).error(function(){
        deferred.reject('There was an error')
      })
      return deferred.promise;
    }

    service.callGreatSchoolsDemo = function() {
      makeDemoUrl();
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
      schoolFactory.setCurrentSchool(school);
      $scope.results = schoolFactory.callGreatSchoolsSearch();
    }
  });


