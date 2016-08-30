angular.module('skool.addSchools', [])
  .controller('addSchoolsController', function($scope, $state){
    $scope.list = [];
    $scope.schoolName = '';
    $scope.submit = function() {
      if ($scope.schoolName) {
        $scope.list.push(this.schoolName);
        $scope.schoolName = '';
        $state.go('favorites');
      }
    }

  });