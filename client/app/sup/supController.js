angular.module("skool", [])
  .controller('supController', function($scope){
    $scope.homie = 'God Bless Abdul Wadud and rectify him and give him Jannah with no azab AMEEN!';
  })
  .controller('famController', function($scope){
    $scope.rabia = 'I be Rrrrabia Mallick';
  })
  .controller('dadController', function($scope){
    $scope.ali = 'I be Aliiii Bhattiiii';
  })
  .controller('theKidsController', function($scope){
    $scope.daughter = 'Fatima';
    $scope.changeName = function(){
      $scope.daughter = 'Zaynab';
    }
  });

