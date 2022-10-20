'use strict';

const package01 = require('..');
const assert = require('assert').strict;

assert.strictEqual(package01(), 'Hello from package01');
console.info("package01 tests passed");
