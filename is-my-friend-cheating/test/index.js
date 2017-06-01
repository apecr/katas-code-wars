'use strict';

const removeNb = require('../index');
const expect = require('chai').expect;

/* global define, it, describe, before */
describe('Testing the is my friend cheating kata', () => {
  it('Should return 15 and 21', () => {
    const result = removeNb(26);
    expect(result).to.deep.equal([[15, 21], [21, 15]]);
  });
  it('Should return empty (n = 1)', () => {
    const result = removeNb(1);
    expect(result).to.deep.equal([]);
  });
  it('Should return empty (n = 2)', () => {
    const result = removeNb(2);
    expect(result).to.deep.equal([]);
  });
  it('Should return empty (n = 3)', () => {
    const result = removeNb(3);
    expect(result).to.deep.equal([]);
  });
  it('Should return empty (n = 4)', () => {
    const result = removeNb(4);
    expect(result).to.deep.equal([]);
  });
  it('Should return empty (n = 5)', () => {
    const result = removeNb(5);
    expect(result).to.deep.equal([]);
  });
  it('Should return empty (n = 6)', () => {
    const result = removeNb(6);
    expect(result).to.deep.equal([]);
  });
  it('Should return empty (n = 7)', () => {
    const result = removeNb(7);
    expect(result).to.deep.equal([]);
  });
  it('Should return empty (n = 8)', () => {
    const result = removeNb(8);
    expect(result).to.deep.equal([]);
  });
  it('Should return empty (n = 9)', () => {
    const result = removeNb(9);
    expect(result).to.deep.equal([]);
  });
  it('Should return 6,7 (n = 10)', () => {
    const result = removeNb(10);
    expect(result).to.deep.equal([[6, 7], [7, 6]]);
  });
});