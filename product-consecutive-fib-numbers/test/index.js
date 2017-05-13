'use strict';

const assert = require('assert');
const productFib = require('../index');

describe('', () => {
  it('4895 into [55, 89, true]', () => {
    //Act
    var arrayResult = productFib(4895);
    //Assert
    assert.deepEqual(arrayResult, [55, 89, true]);
  });
  it('74049690 into [89, 144, false]', () => {
    //Act
    var arrayResult = productFib(74049690);
    //Assert
    assert.deepEqual(arrayResult, [89, 144, false]);
  });
  it('74049690 into [6765, 10946, true]', () => {
    //Act
    var arrayResult = productFib(74049690);
    //Assert
    assert.deepEqual(arrayResult, [6765, 10946, true]);
  });
  it('84049690 into [10946, 17711, false]', () => {
    //Act
    var arrayResult = productFib(84049690);
    //Assert
    assert.deepEqual(arrayResult, [10946, 17711, false]);
  });
  it('193864606 into [10946, 17711, true]', () => {
    //Act
    var arrayResult = productFib(193864606);
    //Assert
    assert.deepEqual(arrayResult, [10946, 17711, true]);
  });
  it('447577 into [610, 987, false]', () => {
    //Act
    var arrayResult = productFib(447577);
    //Assert
    assert.deepEqual(arrayResult, [610, 987, false]);
  });
  it('602070 into [610, 987, true]', () => {
    //Act
    var arrayResult = productFib(602070);
    //Assert
    assert.deepEqual(arrayResult, [610, 987, true]);
  });
});


