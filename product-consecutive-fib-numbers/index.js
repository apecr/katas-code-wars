'use strict';

function fibonacci(n) {
  return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}

function fibonacciProd(n, n1, prod) {
  const fn = fibonacci(n);
  const fn1 = fibonacci(n1);
  return fn * fn1 >= prod ? [fn1, fn, fn * fn1 === prod] : fibonacciProd(n + 1, n, prod);
}

function productFib(prod) {
  return fibonacciProd(1, 0, prod);
}

module.exports = productFib;