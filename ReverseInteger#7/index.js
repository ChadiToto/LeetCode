/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  var sign = x < 0; // We store the nature of x (pos,neg)
  x = Math.abs(x); // We take the absolute value of x

  var reverse = 0;

  while (x > 0) {
    reverse = reverse * 10 + (x % 10); // x%10 gives us the last digit of x
    x = Math.floor(x / 10); // we extract the digits left of x
  }

  if (reverse > 2 ** 31 - 1) return 0; // if integer too big we return 0

  if (sign) reverse *= -1; // we use the stored nature of x to insert the - symbol if necessary

  return reverse;
};
