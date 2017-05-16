'use strict';

const findTheElements = (ints) => {
  var ints = ints;
  var calculateIndex = function (x, y) {
    if (y === x + 1) {
      if (y > 3) {
        var currentArray = ints.slice(0, y++);
        while (currentArray.includes(ints[y++])) {
          ints.splice(y++, 1);
        }
      }
      y++;
      x = 0;
    } else {
      if (x + 2 < y) {
        var previousArray = ints.slice(0, x + 1);
        while (previousArray.includes(ints[x + 1])) {
          ints.splice(x + 1 , 1);
          y--;
        }
      }
      x++;
    }
    return {x: x, y: y};
  }
  var reallyFinding = function (x, y, total, attempts) {
    if (ints[x] + ints[y] === total) {
      return [ints[x], ints[y]];
    }
    if ((y === x + 1 && y === ints.length) || (attempts > 500000)) {
      return undefined;
    }
    var nexIndex = calculateIndex(x, y);
    attempts++;
    return reallyFinding(nexIndex.x, nexIndex.y, total, attempts);
  }
  return reallyFinding;
}

var sum_pairs = function (ints, s) {
  return findTheElements(ints)(0, 1, s, 0);
}

var fibonacci = function () {
  var memo = [0, 1];
  var fib = function (n) {
    var result = memo[n];
    if (typeof result !== 'number') {
      result = fib(n - 1) + fib(n - 2);
      memo[n] = result;
    }
    return result;
  };
  return fib;
}();

module.exports = {
  sum_pairs: sum_pairs,
  fibonacci: fibonacci
};