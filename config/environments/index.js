// Import modules
import development from './development';
import production from './production';

// Index environments
const environments = {development,production};

// Get environment
const ENV = process.env.NODE_ENV || 'development';

if(!environments.includes(ENV)){
	throw new Error('Environment definition not found');
}

// Export relevant environment config
export default environments[ENV];
