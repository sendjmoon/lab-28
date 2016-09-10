'use strict';

module.exports = function(app) {
  app.component('signUp', {
    template: require('./signup-template.html'),
    controller: 'AuthController'
  });
};
