'use strict';

module.exports = function(app) {
  app.controller('NoteController', ['$log', '$scope', '$http', function($log, $scope, $http) {
    console.log('note controller');
    this.note = $scope.note || {};
    this.notes = [];
    this.note.listId = $scope.list._id;
    this.takeThis = $scope.takeThis;

    console.log($scope.list.notes);

    this.noteBaseUrl = `${__API_URL__}/api/note`;

    this.save = () => {
      this.takeThis({note: this.note});
      if(!$scope.note) this.note = null;
    };

    this.getNotes = function() {
      $http.get(this.noteBaseUrl)
      .then((res) => {
        let array = res.data;
        array.forEach((index) => {
          this.notes.push(index);
        });
        console.log(this.notes);
      })
      .catch((err) => {
        console.log('error getting notes: ' + err.data);
      });
    };
  }]);
};
