'use strict';

const removeNb = (n) => {
  const result = [];
  const sum = n * (n + 1) / 2;
  for (var i = 1; i < n; i++) {
    const candidatA = i;
    const condition = (sum - candidatA) % (candidatA + 1);
    if (condition === 0 && (candidatA !== (sum - candidatA) / (candidatA + 1))) {
      const candidatB = (sum - candidatA) / (candidatA + 1);
      if (candidatA * candidatB === sum - candidatA - candidatB && candidatB <= n) {
        result.push([candidatA, candidatB]);
      }
    }
  }
  return result;
};

module.exports = removeNb;