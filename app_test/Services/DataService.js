angular
  .module('myApp')
  .factory('DataService', function ($http) {
    return {
      getData() {
        return $http.get('../app_test/Data/persons.json')
      }
    }
  });
