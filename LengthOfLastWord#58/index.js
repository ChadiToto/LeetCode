/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  /* The last word is the max subarray going from right to left until a whitespace is encountered*/
  let index = s.length;
  let count = 0;

  /*if the last character is a whitespace then we move our cursor until we encounter the first non-whitespace character*/
  while (s[index - 1] == " ") {
    index--;
  }
  /*until we encounter a whitespace we count the letters in the word*/
  while (index != 0 && s[index - 1] != " ") {
    count++;
    index--;
  }
  return count;
};
