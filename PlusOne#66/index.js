/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let carry = 1;
  let index = digits.length - 1;

  while (carry != 0 && index >= 0) {
    if (carry + digits[index] >= 10) {
      // if the sum is greater than 10 it means we have a carry
      digits[index] = 0;
    } else {
      digits[index] += carry;
      carry = 0; // if the sums is lower than 10 we don't have a carry anymore
    }
    index--;
  }
  if (carry == 1) {
    // if still have a carry by the end (999 case for example) we add a 1 in the start of the array
    digits.unshift(1);
  }

  return digits;
};
