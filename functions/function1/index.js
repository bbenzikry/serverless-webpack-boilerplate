'use strict';

import Container from '../../core';
import LambdaWrapper from '../../lib/lambdawrapper';
import Function1 from './function1.service';

module.exports.run = (event, context, callback) => {

	const app = new LambdaWrapper(callback);

	Container.registerClass(
		{
			function2: [Function1,
      {lifetime: Container.Lifetime.SINGLETON}]
		});

	const service = Container.resolve('function2');

	app.run(() => service.run(event, context))
     .end();
};
