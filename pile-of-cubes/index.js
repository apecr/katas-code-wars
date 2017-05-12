'use strict';

function isN(n, acumulado, total){
  acumulado += n*n*n;
  if (acumulado === total){
    return n;
  }
  if (acumulado > total){
    return -1;
  }
  return isN(n+1, acumulado, total);
}

function findNb(m) {
  return isN(1, 0, m);
}

module.exports = findNb;