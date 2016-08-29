angular.module("skool.supController", [])
  .controller('supController', function($scope){
    $scope.homie = 'God bless you man';
    $scope.fsho = "you got this!"
  })
  .controller('famController', function($scope){
    $scope.rabia = ' Rrrrabia Mallick';
  })
  .controller('dadController', function($scope){
    $scope.ali = 'Aliiii Bhattiiii';
  })
  .controller('theKidsController', function($scope){
    $scope.daughter = 'Fatima';
    $scope.changeName = function(){
      $scope.daughter = 'Zaynab';
    }
  })
  .controller('ButtonsCtrl', function ($scope) {
    $scope.singleModel = 1;
  });


