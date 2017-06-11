'use strict';

const expect = require('chai').expect;
const solution = require('../index').solution;

/* global define, it, describe, before */
describe('Testing the strip comments', () => {
  it('Should return the same string', () => {
    const result = solution('Hello', []);

    expect(result).to.equal('Hello');
  });
  it('Should return the same string without spaces', () => {
    const result = solution('    Hello    ', []);

    expect(result).to.equal('Hello');
  });
  it('Should return the same string without blanck spaces', () => {
    const result = solution('    Hello my friend ', []);

    expect(result).to.equal('Hello my friend');
  });
  it('Should delete after marker', () => {
    const result = solution('Hello    !goodbye', [ '!' ]);

    expect(result).to.equal('Hello');
  });
  it('Example from the web', () => {
    const result = solution('apples, pears # and bananas\ngrapes\nbananas !apples', ['#', '!']);

    expect(result).to.equal('apples, pears\ngrapes\nbananas');
  });
  it('Several lines and markers', () => {
    const result = solution('This is my example\nThis is a lines with two markers !the first #the second\nEmpty line\nLine one marker!marker\nLast', [ '!', '#' ]);

    expect(result).to.equal('This is my example\nThis is a lines with two markers\nEmpty line\nLine one marker\nLast');
  });
});