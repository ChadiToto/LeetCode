/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  // we store the number of occurences of each number
  let occ = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (occ.has(nums[i])) occ.set(nums[i], occ.get(nums[i]) + 1);
    else occ.set(nums[i], 1);
  }
  let majority;
  // search for majority element
  occ.forEach((v, k) => {
    if (v > Math.floor(nums.length / 2)) majority = k;
  });
  return majority;
};
