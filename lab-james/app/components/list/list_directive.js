'use strict';

module.exports = function(app) {
  app.directive('listDirective', function() {
    return {
      template: require('./list-template.html'),
      controller: 'ListController',
      controllerAs: 'lc',
      bindToController: true
    };
  });
};
