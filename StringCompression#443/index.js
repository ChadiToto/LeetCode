/**
 * @param {character[]} chars
 * @return {number}
 */

var compress = function (chars) {
  /* point towards the first character */
  let char_count = 1;
  let current_char = chars[0];

  for (var i = 1; i < chars.length; i++) {
    /* until we encounter a new character we increment the char_counter while deleting dupes*/
    if (chars[i] == current_char) {
      char_count++;
      chars.splice(i, 1);
      i--;
    } else {
      /* when a new char is encountered reset the counter and insert the number of occurences in the array */
      let j = 0;
      let arr = char_count.toString();
      while (j < arr.length && char_count != 1) {
        chars.splice(i, 0, arr[j]);
        i++;
        j++;
      }
      current_char = chars[i]; // point towards the next character
      char_count = 1; // counter reset
    }
  }

  // the last char isn't handled inside the loop so we repeat the same approach in the end of the array
  let j = 0;
  let arr = char_count.toString();
  while (j < arr.length && char_count != 1) {
    chars.splice(i, 0, arr[j]);
    i++;
    j++;
  }
};
