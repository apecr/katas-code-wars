'use strict';

function checkElement(a, b) {
  return (a.length === 1 && b.includes(a)) ? a : '';
}
function checkLengthOne(a, b) {
  return [checkElement(a, b) ? checkElement(a, b) : checkElement(b, a), a.length === 1 || b.length === 1];
}

const max = (a, b) => {
  return a.length > b.length ? a : b;
};

const lcs = (a, b) => {
  var result = '';
  var resultAndLastElement = checkLengthOne(a, b);
  if (resultAndLastElement[1] === true) {
    return resultAndLastElement[0];
  }
  if (a.substring(a.length - 1) === b.substring(b.length - 1)) {
    result = (lcs(a.slice(0, -1), b.slice(0, -1))).concat(a.substring(a.length - 1));
  } else {
    result = max(lcs(a.slice(0, -1), b), lcs(a, b.slice(0, -1)));
  }
  return result;
};

module.exports = {
  LCS: lcs
};