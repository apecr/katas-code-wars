'use strict';

const assert = require('assert');
const sum_pairs = require('../index').sum_pairs;
const fibonacci = require('../index').fibonacci;

const l1 = [1, 4, 8, 7, 3, 15];
const l2 = [1, -2, 3, 0, -6, 1];
const l3 = [20, -13, 40];
const l4 = [1, 2, 3, 4, 1, 0];
const l5 = [10, 5, 2, 3, 7, 5];
const l6 = [4, -2, 3, 3, 4];
const l7 = [0, 2, 0];
const l8 = [5, 9, 13, -3];
const l9 = [10, 5, 2, 3, 7, 5];

describe("Testing For Sum of Pairs", function () {
  it('Example test cases', () => {
    assert.deepEqual(sum_pairs(l1, 8), [1, 7], "Result: ["+ sum_pairs(l1, 8) +"] Basic: [" + l1 + "] should return [1, 7] for sum = 8");
  });
  it('Example test cases 2', () => {
    assert.deepEqual(sum_pairs(l2, -6), [0, -6], "Negatives: [" + l2 + "] should return [0, -6] for sum = -6");
  });
  it('Example test cases 3', () => {
    assert.deepEqual(sum_pairs(l3, -7), undefined, "No Match: [" + l3 + "] should return undefined for sum = -7");
  });
  it('Example test cases 4', () => {
    assert.deepEqual(sum_pairs(l4, 2), [1, 1], "First Match From Left: [" + l4 + "] should return [1, 1] for sum = 2 ");
  });
  it('Example test cases 5', () => {
    assert.deepEqual(sum_pairs(l5, 10), [3, 7], "First Match From Left REDUX!: [" + l5 + "] should return [3, 7] for sum = 10 ");
  });
  it('Example test cases 6', () => {
    assert.deepEqual(sum_pairs(l6, 8), [4, 4], "Duplicates: [" + l6 + "] should return [4, 4] for sum = 8");
  });
  it('Example test cases 7', () => {
    assert.deepEqual(sum_pairs(l7, 0), [0, 0], "Zeroes: [" + l7 + "] should return [0, 0] for sum = 0");
  });
  it('Example test cases 8', () => {
    assert.deepEqual(sum_pairs(l8, 10), [13, -3], "Subtraction: [" + l8 + "] should return [13, -3] for sum = 10");
  });
});