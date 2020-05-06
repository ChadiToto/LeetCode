/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  var index = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != val) {
      // we ignore all the numbers that are equal to value
      nums[index] = nums[i];
      index++;
    }
  }
  return index;
};
