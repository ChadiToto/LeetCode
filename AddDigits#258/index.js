/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
  let sum = 0;
  while (num != 0) {
    // we decompose our number by dividing and using modulo operator
    sum += num % 10;
    num = Math.floor(num / 10);
    // we check if the sum of digits is >=10 when we finished going through or number
    if (sum >= 10 && num == 0) {
      num = sum;
      sum = 0;
    }
  }
  return sum;
};
