'use strict';

import Container from '../../core';
import logger_lib from '@exaprint/logger';
import LambdaWrapper from '../../lib/lambdawrapper';
import Function2 from './function2.service';

const logger = logger_lib.setup(Container.cradle.logger);

module.exports.run = (event, context, callback) => {

	logger.info('Running Function2', { pid: process.pid });
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
