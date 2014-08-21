function Ctrl($scope) {
    

    
    $scope.date = new Date();
    $scope.isInvalid = function(field){
    return $scope.myForm[field].$invalid && $scope.myForm[field].$dirty;
  };
  
  $scope.isValid = function(field){
    return $scope.myForm[field].$valid && $scope.myForm[field].$dirty;
  };
  
  $scope.user = {};
  
  $scope.$watch('myForm', function(){
    console.log('$scope.myForm', $scope.myForm);
  });
  
     $scope.people = [];
  
	$scope.registerUser = function() {
    $scope.people.push({
      name: $scope.user.name,
      email: $scope.user.email,
    });
    $scope.user.name = '';
    $scope.user.email = '';
        
	}
    $scope.date = new Date();

}
