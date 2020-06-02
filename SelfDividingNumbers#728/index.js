/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function (left, right) {
  let numbers = [];
  for (let i = left; i <= right; i++) {
    if (isSelfDividing(i)) numbers.push(i);
  }
  return numbers;
};

/**
 * @param {number} n
 * @return {boolean}
 */
var isSelfDividing = function (n) {
  let digits = n.toString().split(""); // we split the numbers to digits
  for (digit of digits) {
    if (n % digit !== 0) return false;
  }
  return true;
};
