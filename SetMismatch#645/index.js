/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
  let set = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (!set.has(nums[i])) set.add(nums[i]);
    else var dupe = nums[i];
  }

  for (let i = 1; i <= nums.length; i++) {
    if (!set.has(i)) var missing = i;
  }
  return [dupe, missing];
};
