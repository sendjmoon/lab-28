'use strict';

require('!!file?name=[name].[ext]!./html/index.html');
require('./scss/base.scss');

const angular = require('angular');
const listApp = angular.module('listApp', [require('angular-route')]);

listApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/signup', {
      template: require('./html/signup.html')
    })
    .when('/signin', {
      template: require('./html/signin.html')
    })
    .when('/list', {
      template: require('./html/list.html')
    })
    .otherwise({
      redirectTo: '/signup'
    });
}]);

require('./components')(listApp);
require('./controller')(listApp);
