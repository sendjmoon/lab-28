'use strict';

module.exports = function(app) {
  app.directive('listNoteDirective', function() {
    return {
      template: require('./note-template.html'),
      controller: 'NoteController',
      controllerAs: 'nc',
      scope: {
        list: '=',
        takeThis: '&'
      }
    };
  });
};
