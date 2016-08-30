angular.module('skool.schools', [])

.controller('schoolsController', function ($scope, Links) {
  $scope.data = {};

  $scope.ally = 'Ahmad Ally';

  Schools.getAll()
    .then(function (schools) {
      $scope.data.schools = schools;
    })
    .catch(function(error){
      console.error(error);
    });


});
