'use strict';

import Container from '../../core';
import LambdaWrapper from '../../lib/lambdawrapper';
import Function2 from './function2.service';

module.exports.run = (event, context, callback) => {

	const app = new LambdaWrapper(callback);

	Container.registerClass(
		{
			function2: [Function2,
      {lifetime: Container.Lifetime.SINGLETON}]
		});

	const service = Container.resolve('function2');

	app.run(() => service.run(event, context))
     .end();
};
