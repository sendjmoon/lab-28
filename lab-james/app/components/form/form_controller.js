'use strict';

module.exports = function(app) {
  app.controller('FormController', ['$log', '$scope', function($log, $scope) {
    $log.log('form controller');
    this.list = $scope.list || {};
    this.takeThis = $scope.takeThis;
    this.save = () => {
      this.takeThis({list: this.list});
      if(!$scope.list) this.list = null;
    };
  }]);
};
