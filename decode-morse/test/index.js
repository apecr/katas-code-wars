'use strict';

const assert = require('assert');
const decodeMorse = require('../index');

describe("Example from description", function () {
  it('First example, HEY JUDE', () => {
    assert.equal(decodeMorse('.... . -.--   .--- ..- -.. .'), 'HEY JUDE');
  });
  it("Your own tests", function () {
    var result = decodeMorse('.... . .-.. .-.. ---   .-- --- .-. .-.. -..');
    //Assert
    assert.equal(result, 'HELLO WORLD');
  });
  it("SOS Test", function () {
    var result = decodeMorse('   ···−−−···   .... . .-.. .-.. ---   .-- --- .-. .-.. -..');
    //Assert
    assert.equal(result, 'SOS HELLO WORLD');
  });
});