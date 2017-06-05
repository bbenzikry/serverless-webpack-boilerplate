import { createContainer, Lifetime } from 'awilix';
import logger_lib from '@exaprint/logger';
import config from '../config';

// IoC initialization
const container = createContainer();


const logger = logger_lib.setup(config.logger);
//TODO: Yeoman hook here
container.registerValue({config, logger });

export default {Lifetime, ...container};
