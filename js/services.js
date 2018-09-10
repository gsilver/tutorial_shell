tutorialApp.factory('Get', function($http, $rootScope, $log) {
  return {
    getTutorial: function() {
      return $http.get('data/tutorial.json').then(
        function success(result) {
          return result;
        },
        function error(result) {
          return result;
        }
      );
    },
  };
});

tutorialApp.factory('focus', function($timeout, $window) {
  return function(id) {
    $timeout(function() {
      var element = $window.document.getElementById(id);
      if(element)
        //element.tabIndex = -1;
        element.focus();
    });
  };
});
