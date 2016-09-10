'use strict';

module.exports = function(app) {
  app.directive('listFormDirective', function() {
    return {
      template: require('./form-template.html'),
      controller: 'FormController',
      controllerAs: 'fc',
      scope: {
        takeThis: '&'
      }
    };
  });
};
