/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let RomanInteger = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let index = s.length - 1; // we go from right to left
  let value = 0;
  while (index >= 0) {
    let left = RomanInteger[s[index]];
    let right = RomanInteger[s[index - 1]];
    if (left > right) {
      value += left - right;
      index -= 2; // we skip the next number as its counted in this operation
    } else {
      value += left;
      index--;
    }
  }
  return value;
};
