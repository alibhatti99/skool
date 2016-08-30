angular.module("skool.test", [])
  .controller('mainController', function($scope){
    $scope.message = 'Everyone come and see how good I look!';
  })
  .controller('Cat', function($scope){
    $scope.dog = 'Where my dawgs at!?';
    $scope.wife = 'Rabia';
    $scope.me = 'Ali';
  })
  .controller('Habib', function($scope){
    $scope.advice = 'Do lots of salawat.';
    $scope.age = 50;
  })
  .controller('Kids', function($scope){
    $scope.mykids = 'my kids';
    $scope.showKids = function(){
      $scope.mykids = 'Fatima, Abu-Bakr, Zaynab';
    }
    $scope.daughter = 'Fatima';
    $scope.changeName = function(){
      $scope.daughter = 'Zaynab';
    }
    $scope.family = ["Ali", "Rabia","Fatima", "Abu-Bakr", "Zaynab"];
  });

//alert('TEST CONTROLLER.JS IS LOADING PROPERLY')