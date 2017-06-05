'use strict';
export default class Function1 {
  /**
   * Constructor
   *
   * @param {config} Configuration object
   */
	constructor({config, logger}) {
		this.config = config;
		this.logger = logger;
	}

  /**
   * Run lambda function
   *
   * @param {event} Lambda event object
   * @param {context} Lambda context object
   *
   * @returns {Consumer} this
   */
	run(event, context) {
		let context_use = context;
		let event_use = event;
		this.logger.info('in function 1');
		return 'function1';
	}


    /**
     * Example of jest run test method
     *
     * @param {input} input
     *
     * @returns {String} output
     */
	testable_method(input) {
		return 'output';
	}
}
