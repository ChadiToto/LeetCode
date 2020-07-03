/**
 * @param {string} S
 * @return {number}
 */
var minAddToMakeValid = function (S) {
  let count = 0;
  let stack = [];
  for (let letter of S) {
    if (letter == "(") stack.unshift(letter);
    else if (stack.length !== 0) stack.shift();
    else count++;
  }
  count += stack.length;
  return count;
};
