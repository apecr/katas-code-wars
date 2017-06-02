'use strict';

const diccionary = new Map();
diccionary.set('0', ['0', '8']);
diccionary.set('1', ['1', '2', '4']);
diccionary.set('2', ['1', '2', '3', '5']);
diccionary.set('3', ['2', '3', '6']);
diccionary.set('4', ['1', '4', '5', '7']);
diccionary.set('5', ['2', '4', '5', '6', '8']);
diccionary.set('6', ['3', '5', '6', '9']);
diccionary.set('7', ['4', '7', '8']);
diccionary.set('8', ['5', '7', '8', '9', '0']);
diccionary.set('9', ['6', '8', '9']);

const getDiccionaryValue = (key) => {
  return diccionary.get(key);
};

const multiplyArrays = (array1, array2) => {
  const finalArray = [];
  if (array1.length === 0) {
    return array2;
  }
  array1.forEach((element1) => {
    array2.forEach((element2) => {
      finalArray.push(`${element1}${element2}`);
    });
  });
  return finalArray;
};

const getPINs = (observed, acc) => {
  if (!acc) {
    acc = [];
  }
  const arrayObserved = observed.split('');
  if (observed.length === 1) {
    return multiplyArrays(acc, getDiccionaryValue(observed));
  } else {
    const newAcc = multiplyArrays(acc, getDiccionaryValue(arrayObserved[0]));
    const restNumbers = [].slice.call(arrayObserved, 1);
    return getPINs(restNumbers.join(''), newAcc);
  }
};


module.exports = {
  getPINs,
  multiplyArrays
};