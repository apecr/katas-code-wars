'use strict';

const expandedForm = require('../index');
const assert = require('assert');

describe('Testing numbers in expanded form', () => {
  it('12 Sould return 10 + 2',() => {
    //Act
    var result = expandedForm(12);
    //
    assert.equal(result, '10 + 2');
  });
  it('42 Sould return 40 + 2',() => {
    //Act
    var result = expandedForm(42);
    //
    assert.equal(result, '40 + 2');
  });
  it('70304 Sould return 7000 + 300 + 4',() => {
    //Act
    var result = expandedForm(70304);
    //
    assert.equal(result, '70000 + 300 + 4');
  });
});