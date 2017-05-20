'use strict';

import config from '../config'

  //TODO: Add config mock

describe('Function1 test', function() {
  it('Should be completely tested', function() {
    const service = new Function1({test:"test"});
    expect(service.testable_func("something")).toBe("output")
  });
});
