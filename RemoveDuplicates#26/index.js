/**
 * @param {number[]} nums
 * @return {number}
 */

var removeDuplicates = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    var j = 1;
    //search for the next duplicate element
    while (nums[i] == nums[i + j] && i + j < nums.length) {
      j++;
    }
    //delete duplicates
    nums.splice(i, j - 1);
  }
};
