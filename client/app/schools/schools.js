angular.module('skool.schools', [])

.controller('SchoolsController', function ($scope, Links) {
  $scope.data = {};

  Schools.getAll()
    .then(function (schools) {
      $scope.data.schools = schools;
    })
    .catch(function(error){
      console.error(error);
    });


});
