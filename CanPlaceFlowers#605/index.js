/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  /* we start by the edges */
  if (flowerbed[0] == 0 && flowerbed[1] == 0 && n > 0) {
    flowerbed[0] = 1;
    n--;
  }
  if (
    flowerbed[flowerbed.length - 1] == 0 &&
    flowerbed[flowerbed.length - 2] == 0 &&
    n > 0
  ) {
    flowerbed[flowerbed.length - 1] = 1;
    n--;
  }

  /* One element case */
  if (flowerbed[0] == 0 && flowerbed.length == 1) {
    flowerbed[0] = 1;
    n--;
  }

  /* we expand the center of remaining elements */
  for (let i = 0; i < flowerbed.length - 1; i++) {
    if (n <= 0) break;

    if (flowerbed[i - 1] == 0 && flowerbed[i + 1] == 0 && flowerbed[i] == 0) {
      flowerbed[i] = 1;
      n--;
      i++;
    }
  }
  console.log(flowerbed); // planted flowers

  if (n > 0) return false;
  return true;
};
