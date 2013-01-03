'use strict';

describe('Directive: firebase', function() {
  beforeEach(module('EconomicsApp'));

  var element;

  it('should make hidden element visible', inject(function($rootScope, $compile) {
    element = angular.element('<firebase></firebase>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the firebase directive');
  }));
});
