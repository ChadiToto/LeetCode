/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  if (needle.length > haystack.length) return -1;
  if (needle.length == 0) return 0;

  for (let i = 0; i < haystack.length; i++) {
    if (needle[0] == haystack[i]) {
      if (needle == haystack.substr(i, needle.length)) return i;
    }
  }

  return -1;
};
