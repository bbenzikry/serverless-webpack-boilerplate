import { createContainer, Lifetime } from 'awilix';
import config from '../config';

// IoC initialization
const container = createContainer();

//TODO: Yeoman hook here
container.registerValue({config});

export default {Lifetime, ...container};
