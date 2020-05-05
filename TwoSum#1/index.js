/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function (nums, target) {
  var map = new Map();
  for (let i = 0; i < nums.length; i++) {
    /* Search out the complement in our Hashmap */
    if (map.has(target - nums[i])) {
      /* If Found : we return the indexes of the two numbers */
      return [map.get(target - nums[i]), i];
    }
    /* Otherwise add the current number(key) and its index(value) in the hashmap */
    map.set(nums[i], i);
  }
  /* No TwoSum found*/
  return [];
};
