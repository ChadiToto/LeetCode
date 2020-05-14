/**
 * @param {string} S
 * @param {number} K
 * @return {string}
 */
var licenseKeyFormatting = function (S, K) {
  let count = 0; // non-dash letter counter
  S = S.toUpperCase();
  let stack = [];
  for (let i = S.length - 1; i >= 0; i--) {
    if (count - K == 0) {
      // when we have enough non-dash words we push a dash to the stack
      count = 0;
      stack.push("-");
    }
    if (S.charAt(i) != "-") {
      //increment counter when a non-dash character is encountered
      count++;
      stack.push(S[i]);
    }
  }
  let i = 0;
  stack = stack.reverse(); // our stack is initially reversed so we have to reverse back
  while (stack[i] == "-") {
    // we may still have dashes in the begining of our string we need to take care of that
    stack.splice(i, 1);
    i++;
  }
  return stack.join("");
};
