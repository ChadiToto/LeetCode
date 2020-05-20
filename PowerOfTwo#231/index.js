/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
  let pow = 2 ** 0;
  let i = 0;
  while (pow <= n) {
    if (pow == n) return true;
    i++;
    pow = 2 ** i;
  }
  return false;
};
