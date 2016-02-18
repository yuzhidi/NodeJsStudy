var assert = require('assert');
assert.equal(1, true, 'Truthy');
assert.notEqual(1, true, 'Truthy');
assert.ok('This is a string', 'Strings that are not empty are truthy');
