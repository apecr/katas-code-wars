'use strict';

const assert = require('assert');
const dataReverse = require('../index');


describe('First cases', () => {
  var data1= [1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0];
  var data2= [1,0,1,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1];
  it('Data 1 reverse is data 2', () => {
    //Act
    const result = dataReverse(data1);
    //Assert
    assert.equal(result, data2, ``);
  });
});