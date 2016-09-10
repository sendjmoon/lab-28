'use strict';

module.exports = (app) => {
  app.controller('AuthController', ['$http', '$location', '$window', function($http, $location, $window) {

    this.createUser = function(user) {
      $http.post('http://localhost:3000/api/signup', user)
        .then((res) => {
          $http.defaults.headers.common['Authorization'] = 'Bearer ' + res.data.token;
          $location.path('/list');
        })
        .catch((err) => {
          console.log('error creating user: ' + err.data);
        });
    };

    this.userLogin = function(user) {
      let config = {
        headers: {
          'Authorization': 'Basic ' + $window.btoa(user.email + ':' + user.password)
        }
      };
      $http.get('http://localhost:3000/api/signin', config)
        .then((res) => {
          $http.defaults.headers.common['Authorization'] = 'Bearer ' + res.data.token;
          $location.path('/list');
        })
        .catch((err) => {
          console.log('error logging in: ' + err.data);
        });
    };
  }]);
};
