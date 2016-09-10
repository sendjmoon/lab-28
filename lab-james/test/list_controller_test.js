'use strict';

describe('test the list controller', function() {
  beforeEach(() => {
    angular.mock.module('listApp');
    angular.mock.inject(($controller, $httpBackend) => {
      this.listCtrl = new $controller('ListController');
      this.$httpBackend = $httpBackend;
    });
  });

  it('should create a list item', () => {
    let url = 'http://localhost:3000/api/list';
    let data = {name: 'pixarvillains'};
    let headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };
    this.$httpBackend.expectPOST(url, data, headers)
    .respond(200, {
      name: 'pixarvillains',
      _id: '123456789',
      __v: 0,
      notes: []
    });
    this.listCtrl.createList(data);
    this.$httpBackend.flush();
  });

  it('should get all lists in the db', () => {
    let url = 'http://localhost:3000/api/list';
    let data = {name: 'pixarvillains', _id: '123456789', __v: 0, notes: []};
    this.listCtrl.getLists();
    this.$httpBackend.expectGET(url)
    .respond(200, data);
    expect(this.listCtrl.lists.length).toBeGreaterThan(0);
  });
});
