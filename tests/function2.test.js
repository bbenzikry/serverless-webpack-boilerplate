'use strict';

import Function2 from '../functions/function2/function2.service';

describe('Function2 test', function() {
	it('Should be completely tested', function() {
		const service = new Function2({test:'test'});
		expect(service.testable_method('something')).toBe('output')
	});
});
