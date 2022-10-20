'use strict';

const package02 = require('..');
const assert = require('assert').strict;

assert.strictEqual(package02(), 'Hello from package02');
console.info("package02 tests passed");
