/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

let binarySearch = function (arr, x) {
  let start = 0,
    end = arr.length - 1;

  // Iterate while start not meets end
  while (start <= end) {
    // Find the mid index
    var mid = Math.floor((start + end) / 2);

    // If element is present at mid, return True
    if (arr[mid] === x) return mid;
    // Else look in left or right half accordingly
    else if (arr[mid] > x) end = mid - 1;
    else start = mid + 1;
  }
  return start; // if not found we return the lower index as its the index we need to insert our element
};

var searchInsert = function (nums, target) {
  // our array is sorted =>  for searching binarysearch is the best approach we can take
  return binarySearch(nums, target);
};
