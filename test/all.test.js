/* --------------------
 * eslint-plugin-ejs-js module
 * Tests
 * ------------------*/

'use strict';

// Modules
const chai = require('chai'),
	{expect} = chai,
	plugin = require('../lib/');

// Init
chai.config.includeStack = true;

// Tests

describe('Tests', function() {
	it.skip('all', function() {
		expect(plugin).to.be.ok;
	});
});
