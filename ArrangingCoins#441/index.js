/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function (n) {
  let row = 0;
  let number_stairs = 1;
  for (let i = 0; i < n; i++) {
    n = n - number_stairs;
    if (n >= 0) {
      row++;
    } else return row;

    number_stairs++;
  }
  return row;
};
