'use strict';

const expect = require('chai').expect;
const index = require('../index');

/* global define, it, describe, before */
describe('Longest common subsequence', () => {
  it('Should return empty', () => {
    var lcs = index.LCS('a', 'b');
    expect(lcs).to.equal('');
  });
  it('Should return a (from a and a)', () => {
    var lcs = index.LCS('a', 'a');
    expect(lcs).to.equal('a');
  });
  it('Should return b (from b and b)', () => {
    var lcs = index.LCS('b', 'b');
    expect(lcs).to.equal('b');
  });
  it('Should return b (from ab and b)', () => {
    var lcs = index.LCS('ab', 'b');
    expect(lcs).to.equal('b');
  });
  it('Should return abc (from abcdef and abc)', () => {
    var lcs = index.LCS('abcdef', 'abc');
    expect(lcs).to.equal('abc');
  });
  it('Should return AANA (from BANANA and ATANA)', () => {
    var lcs = index.LCS('BANANA', 'ATANA');
    expect(lcs).to.equal('AANA');
  });
});