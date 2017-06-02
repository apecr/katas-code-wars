'use strict';

const index = require('../index');
const expect = require('chai').expect;

/* global define, it, describe, before */
describe('Testing de getPins', () => {
  it('Should multiply two arrays', () => {
    const array1 = [1, 2, 3];
    const array2 = [1, 2, 3];
    const result = index.multiplyArrays(array1, array2);
    expect(result).to.deep.equal(['11', '12', '13', '21', '22', '23', '31', '32', '33']);
  });
  it('Should return the variations of 8', () => {
    var result = index.getPINs('8');
    expect(result.sort()).to.deep.equal(['5', '7', '8', '9', '0'].sort());
  });
  it('Should return the variations of 11', () => {
    var result = index.getPINs('11');
    expect(result.sort()).to.deep.equal(['11', '22', '44', '12', '21', '14', '41', '24', '42'].sort());
  });
  it('Should return the variations of 369', () => {
    var result = index.getPINs('369');
    expect(result.sort()).to.deep.equal(['339', '366', '399', '658', '636', '258', '268', '669', '668', '266', '369', '398', '256', '296', '259', '368', '638', '396', '238', '356', '659', '639', '666', '359', '336', '299', '338', '696', '269', '358', '656', '698', '699', '298', '236', '239'].sort());
  });
});