/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  var prefix = "";
  var index = 0;

  if (strs.length == 0) {
    // if empty array return empty prefix
    return prefix;
  }

  for (let letter of strs[0]) {
    // for each letter in the first string we check each letter of the corresponding index
    for (let i = 1; i < strs.length; i++) {
      if (letter != strs[i].charAt(index)) return prefix; // when a letter is not common between words return the current prefix
    }
    prefix += letter; // if a letter is common between all words , add it to the prefix
    index++; // on to the next letter
  }
  return prefix;
};
