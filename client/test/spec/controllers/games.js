'use strict';

describe('Controller: GamesCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var GamesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GamesCtrl = $controller('GamesCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(GamesCtrl.awesomeThings.length).toBe(3);
  });
});
