'use strict';

const isHammingNumber = (num) => {
  while (num % 5 === 0) {
    num /= 5;
  }
  while (num % 3 === 0) {
    num /= 3;
  }
  while (num % 2 === 0) {
    num /= 2;
  }
  return num === 1;
}

module.exports = {
  hamming(number) {
    var succession = [ 1 ];
    var length = succession.length;
    var candidate = 2;
    while (length < number) {
      if (isHammingNumber(candidate)) {
        succession[length] = candidate;
        length++;
      }
      candidate++;
    }
    return succession[succession.length - 1];
  }
};