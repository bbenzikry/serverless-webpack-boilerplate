'use strict';
export default class Function2 {
  /**
   * Constructor
   *
    * @param {config} Configuration object
   */
	constructor({config}) {
		this.config = config;
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
		return 'function2';
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
