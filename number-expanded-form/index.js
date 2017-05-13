'use strict';

function getResult(number, accumulate, potencia){
  if (number === 0){
    return accumulate;
  }
  var newNumber = number % 10;
  if (newNumber !== 0){
    if (accumulate === ''){
      accumulate = `${newNumber * potencia}`;
    }else {
      accumulate = `${newNumber * potencia} + ${accumulate}`;
    }
  }
  return getResult((number - newNumber)/10, accumulate, potencia*10);
}

function expandedForm(num) {
  return getResult(num, '', 1);
}

module.exports = expandedForm;