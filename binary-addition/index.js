'use strict';

function addBinary(a,b) {
  return ((a+b) >>> 0).toString(2);
}

module.exports = addBinary;