/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  var stack = []; // the approach here is push every opening parantheses into the stack and popping it on closing
  var map = {
    // record every corresponding opening/closing parantheses
    ")": "(",
    "]": "[",
    "}": "{",
  };

  for (let i = 0; i < s.length; i++) {
    if (s[i] == "(" || s[i] == "{" || s[i] == "[") {
      // we push the opening parantheses
      stack.push(s[i]);
    } else {
      let paranthese = stack.pop(); // we pop the first element of the stack when encountering a closing parantheses
      if (map[s[i]] != paranthese) return false; // if the popped element & the current closing parantheses aren't a match then its invalid
    }
  }

  if (stack.length == 0) return true; // if parantheses are valid then the stack should be empty by the end

  return false; // stack not empty => not valid
};
