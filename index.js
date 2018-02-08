'use strict';
const EventEmitter = require('events');

/* simple addition function */
function add(a, b) {
  return a + b;
}

/* asyncronous wrapper for addition function */
function addAsync(a, b, cb) {
  const result = add(a, b);
  return cb(null, result);  // usually the first argument to callback function is an error
                            // or null if there is no error
}

module.exports = { add, addAsync };
