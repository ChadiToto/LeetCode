/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
  let set = new Set(nums);
  if (set.size < 3) return Math.max(...nums);

  for (let i = 0; i < 2; i++) {
    set.delete(Math.max(...set));
  }
  return Math.max(...set);
};
