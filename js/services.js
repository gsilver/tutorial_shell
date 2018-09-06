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
