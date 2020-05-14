/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  let first_occ = new Map(); // this map will contain only unique characters
  let seen = new Map(); // this map will contain duplicate characters
  for (let i = 0; i < s.length; i++) {
    if (!first_occ.has(s[i]) && !seen.has(s[i])) {
      // first occurence of a character
      first_occ.set(s[i], i);
    } else if (first_occ.has(s[i])) {
      // character occured multiple times
      first_occ.delete(s[i]);
      seen.set(s[i], i);
    }
  }

  let arr = Array.from(first_occ.values());
  if (arr.length == 0) return -1;
  let first_unique = Math.min(...arr); // we find the min index of the unique character
  return first_unique;
};
