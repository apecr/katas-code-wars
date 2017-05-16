'use strict';

var longestPalindrome = function (s) {
  if (s.length === 0){
    return 0;
  }
  for (var i = 0; i < s.length; i++){
    for (var j = 0; j <= i ; j++){
      var substring = s.substring(j, s.length -i +j);
      if (substring === substring.split("").reverse().join("")){
        return substring.length;
      }
    }
  }
}

module.exports = longestPalindrome;