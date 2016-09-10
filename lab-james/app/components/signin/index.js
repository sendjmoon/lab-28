'use strict';

module.exports = function(app) {
  app.component('signIn', {
    template: require('./signin-template.html'),
    controller: 'AuthController'
  });
};
