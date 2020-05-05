/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  /* A hashmap in javascript is an object */
  var map = {};

  /* if the two strings aren't of equal length they're not anagrams */
  if (s.length != t.length) return false;

  /* we iterate through the first string */
  for (let i = 0; i < s.length; i++) {
    if (!map[s.charAt(i)]) {
      /* we initialize the first occurence of a letter in the string*/
      map[s.charAt(i)] = 1;
    } else {
      /* we increment the number of occurences of a letter in the string if occured multiple times*/
      map[s.charAt(i)] = map[s.charAt(i)] + 1;
    }
  }

  /* we check if the second string is an anagram of the first*/
  for (let i = 0; i < t.length; i++) {
    if (!map[t.charAt(i)]) {
      /* 1-Its not an anagram if a letter in the second string is not present in the first*/
      return false;
    }

    /* 2- its not an anagram if a letter occurs more times in the second string than the first */
    if (map[t.charAt(i)] < 1) return false;

    /* we decrement the occurence of the letter in the hashmap */
    map[t.charAt(i)] = map[t.charAt(i)] - 1;
  }

  return true;
};
