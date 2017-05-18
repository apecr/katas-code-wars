'use strict';

const dataReverse = function(data){
  var arrayBytes = [];
  const tam = data.length / 8;
  for (var i = 0; i < tam; i++){
    arrayBytes.push(data.splice(0,8));
  }
  return arrayBytes.reverse().join();
}

module.exports = dataReverse;