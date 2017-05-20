export default {
	logger: {
		console_enabled: true,
		level:'verbose',
		loggly: {
			token: 'TEST-TOKEN',
			subdomain: 'test',
			enabled: false,
			json: true
		}
	},
	ENV: 'development',
	development: true
};
