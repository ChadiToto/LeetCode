/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (!map.has(nums[i])) map.set(nums[i], i);
    else {
      let check = i - map.get(nums[i]);
      if (check <= k) return true;
      else map.set(nums[i], i);
    }
  }
  return false;
};
