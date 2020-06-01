/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
  let current_number = "1"; // Initialization
  for (let i = 1; i < n; i++) {
    let next_number = "";
    let current_char = current_number.charAt(0);
    let current_char_count = 1;
    let j = 0;
    for (j = 1; j < current_number.length; j++) {
      if (current_char === current_number.charAt(j)) current_char_count++;
      else {
        next_number += current_char_count + current_number.charAt(j - 1);
        current_char = current_number.charAt(j);
        current_char_count = 1;
      }
    }
    next_number += current_char_count + current_number.charAt(j - 1);
    current_number = next_number;
  }
  return current_number;
};
