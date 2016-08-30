angular.module("skool.home", [])
  .controller('locationController', function($scope){
    $scope.$location = $location;
  });