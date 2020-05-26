/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function (pattern, str) {
  str = str.split(" ");

  if (str.length != pattern.length) return false;

  let assoc = new Map();
  let seen = new Set();
  for (let i = 0; i < pattern.length; i++) {
    // register each word and its association & mark the association as seen
    if (!assoc.has(pattern[i]) && !seen.has(str[i])) {
      assoc.set(pattern[i], str[i]);
      seen.add(str[i]);
    } else if (assoc.get(pattern[i]) != str[i]) return false; // if we need to reregister the association then the pattern is wrong
  }
  return true;
};
