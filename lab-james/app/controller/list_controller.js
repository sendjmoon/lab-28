'use strict';

const listApp = angular.module('listApp');

listApp.controller('ListController', ['$log', '$http', ListController]);

function ListController($log, $http) {
  $log.log('started list controller');
  this.lists = [];
  this.baseUrl = `${__API_URL__}/api/list`;
  let config = {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  };

  this.createList = function(list) {
    $log.debug('entered createImage function');
    $http.post(this.baseUrl, list, config)
    .then((res) => {
      $log.log('res.data: ' + res.data);
      this.logList(res.data);
      console.log(this.lists);
    })
    .catch((err) => {
      $log.error('Error in Creating List: ' + err);
    });
  };

  this.getLists = function() {
    $log.debug('entered getLists function');
    $http.get(this.baseUrl)
    .then((res) => {
      $log.log('res.data: ' + res.data);
      let array = res.data;
      array.forEach((index) => {
        this.logList(index);
      });
    })
    .catch((err) => {
      $log.error('Error in Getting Lists: ' + err);
    });
  };

  this.removeList = function(listId) {
    $log.debug('entered removeList function');
    $http.delete(this.baseUrl + '/' + listId)
    .then((res) => {
      $log.log('res.data: ' + res.data);
    })
    .then(this.getLists())
    .catch((err) => {
      $log.error('Error in Removing List: ' + err);
    });
  };

  this.logList = function(list) {
    this.lists.push(list);
  };
}
