'use strict';

const assert = require('assert');
const longestPalindrome = require('../index');

describe('Tests for longest palindrome', () => {
  it('a palindrome 1', () => {
    assert.equal(longestPalindrome("a"), 1);
  });
  it('baa palindrome 2', () => {
    assert.equal(longestPalindrome("baa"), 2);
  });
  it('aab palindrome 2', () => {
    assert.equal(longestPalindrome("aab"), 2);
  });
  it('zyabyz not palindrome', () => {
    assert.notEqual(longestPalindrome("zyabyz"), 6, "Are you sure that is a palindrome?");
  });
  it('baabcd palindrome 4', () => {
    assert.equal(longestPalindrome("baabcd"), 4);
  });
  it('baablkj12345432133d palindrome 9', () => {
    assert.equal(longestPalindrome("baablkj12345432133d"), 9);
  });
  it('Null palindrome 0', () => {
    assert.equal(longestPalindrome(""), 0);
  });
});