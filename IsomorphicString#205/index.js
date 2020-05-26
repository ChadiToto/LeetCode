/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  if (s.length != t.length) return false;

  let map = new Map();
  let set = new Set();

  for (let i = 0; i < s.length; i++) {
    /* we register each character from s & t */
    if (!map.has(s[i]) && !set.has(t[i])) {
      map.set(s[i], t[i]);
      set.add(t[i]);
    } else if (map.get(s[i]) != t[i]) return false; // if a character association need to be overrided then its not isomorphic
  }
  return true;
};
