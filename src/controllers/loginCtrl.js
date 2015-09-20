app.controller('mainController', function($scope, pwConfig, authService){
  
  $scope.message = "";
  $scope.login = function() {
    userData = {userData: [$scope.userName, $scope.userEmail]}
    console.log(userData)
    //Users.push(userData);
  }
});
