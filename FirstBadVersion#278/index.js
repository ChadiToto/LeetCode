/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    // to minimize the number of function calls , we use binary search
    let start = 1,
      end = n;
    let first_bad_version = -1;

    // Iterate while start not meets end
    while (start <= end) {
      // Find the mid version
      let mid = Math.floor((start + end) / 2);
      if (isBadVersion(mid)) {
        // if we find a bad version we search earlier versions for an earlier one
        first_bad_version = mid;
        end = mid - 1;
      } else if (!isBadVersion(mid)) {
        // if we don't we search later versions
        start = mid + 1;
      }
    }
    return first_bad_version;
  };
};
