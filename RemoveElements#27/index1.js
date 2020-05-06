/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == val) {
      // Delete when element is encountered
      nums.splice(i, 1);
      i--;
    }
  }
};
