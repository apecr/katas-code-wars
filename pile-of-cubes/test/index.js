'use strict';

const findNb = require('../index');
const assert = require('assert');

describe("Basic tests",function() {

  it('Should return 1', () => {
    var result = findNb(1);
    assert.equal(1,result);
  });
  it('Should return 2022', () => {
    //Act
    var result = findNb(4183059834009);
    //Assert
    assert.equal(2022, result);
  });
  it('Should return -1', () => {
    //Act
    var result = findNb(24723578342962);
    //Assert
    assert.equal(-1, result);
  });
  it('Should return 4824', () => {
    //Act
    var result = findNb(135440716410000);
    //Assert
    assert.equal(4824, result);
  });
  it('Should return 3568', () => {
    //Act
    var result = findNb(40539911473216);
    //Assert
    assert.equal(3568, result);
  });
})