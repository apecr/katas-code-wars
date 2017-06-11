'use strict';

module.exports = {
  solution(input, markers) {
    var result = input;
    if (markers.length > 0) {
      result = input.split('\n').map((line) => {
        var lineProcessed = false;
        line = markers.map((marker, index, array) => {
          if (line.includes(marker) && !lineProcessed) {
            lineProcessed = true;
            return line.split(marker)[0].trim();
          }
          if (index === array.length - 1 && !lineProcessed && line !== '') {
            return line.trim();
          }
        }).filter((element) => element).join('\n');
        return line;
      }).join('\n');
    }
    return result.trim();
  }
};