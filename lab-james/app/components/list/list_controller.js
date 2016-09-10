'use strict';

module.exports = function(app) {
  app.controller('ListController', ['$log', '$http', function($log, $http) {
    $log.log('list controller');
    this.baseUrl = `${__API_URL__}/api/list`;
    this.noteBaseUrl = `${__API_URL__}/api/note`;
    this.config = {
      'Accept': 'Application/json',
      'Content-Type': 'Application/json'
    };

    this.lists = [];

    this.getLists = function() {
      $log.log('getLists function');
      $http.get(this.baseUrl)
        .then((res) => {
          let array = res.data;
          array.forEach((index) => {
            this.lists.push(index);
          });
        })
        .catch((err) => {
          $log.log('Error in getting lists: ' + err);
        });
    };

    this.createList = function(list) {
      $log.log('createList function');
      $http.post(this.baseUrl, list, this.config)
        .then((res) => {
          this.lists.push(res.data);
        })
        .catch((err) => {
          $log.log('Error in creating list: ' + err);
        });
    };

    this.removeList = function(list) {
      $log.log('removeList function');
      $http.delete(this.baseUrl + '/' + list._id, this.config)
        .then(() => {
          this.lists.splice(this.lists.indexOf(list), 1);
        })
        .catch((err) => {
          console.log('error removing list: ' + err);
        });
    };

    this.createNote = function(list, note) {
      $log.log('createNote function');
      note.listId = list._id;
      note.name = list.name;
      $http.post(this.noteBaseUrl, note, this.config)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log('error creating note: ' + err.data);
      });
    };
  }]);
};
