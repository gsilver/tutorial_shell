//TODO: package with Bower/Grunt
tutorialApp.controller('mainController', ['$scope', '$rootScope','$http', '$log','$location', 'Get', function($scope, $rootScope, $http, $log, $location, Get) {
  Get.getTutorial().then(function(tutorialData) {
    $scope.tutorial = tutorialData.data;
    $rootScope.tutorial = tutorialData.data;
    //console.log($location.path());
    $scope.currentView = parseInt(_.last(($location.path()).split('/')));
    if(isNaN($scope.currentView)){
      $scope.currentView=0;
      $scope.tutorial_title='Start';
    }
    else {

      $scope.tutorial_title=$scope.tutorial[$scope.currentView-1].name;
      
    }
    $scope.$on('$locationChangeStart', function(event, next, current) {
      $scope.currentView = _.last(next.split('/'));
        $scope.currentView=parseInt($scope.currentView);
        //console.log($scope.currentView);
        if(isNaN($scope.currentView)){
          $scope.currentView=0;
          $scope.tutorial_title='Start';
        }
        else {
          $scope.tutorial_title=$scope.tutorial[$scope.currentView-1].name || $rootScope.tutorial[$scope.currentView-1].name;
        }
    });
  });
}]);
