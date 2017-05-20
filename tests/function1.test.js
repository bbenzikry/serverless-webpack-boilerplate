'use strict';

import Function1 from '../functions/function1/function1.service';

describe('Function1 test', function() {
	it('Should be completely tested', function() {
		const service = new Function1({test:'test'});
		expect(service.testable_method('something')).toBe('output');
	});
});
