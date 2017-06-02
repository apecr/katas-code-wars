'use strict';

function checkLengthOne(a, b) {
  var result = '';
  if (a.length === 1) {
    if (b.includes(a)) {
      result = a;
    }
  }
  if (b.length === 1) {
    if (a.includes(b)) {
      result = b;
    }
  }
  return [result, a.length === 1 || b.length === 1];
}

const max = (a, b) => {
  return a.length > b.length ? a : b;
};

const lcs = (a, b) => {
  var result = ';'
  var resultAndLastElement = checkLengthOne(a, b);
  if (resultAndLastElement[1] === true) {
    return resultAndLastElement[0];
  } else {
    //First property
    if (a.substring(a.length - 1) === b.substring(b.length - 1)) {
      result = (lcs(a.slice(0, -1), b.slice(0, -1))).concat(a.substring(a.length - 1));
    } else {
      result = max(lcs(a.slice(0, -1), b), lcs(a, b.slice(0, -1)));
    }
  }
  return result;
};

module.exports = {
  LCS: lcs
};