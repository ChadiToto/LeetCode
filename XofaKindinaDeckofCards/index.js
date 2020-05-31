/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function (deck) {
  let occ = new Map();
  /* We first map out all the cards in the deck and their occurences */
  for (let card of deck) {
    if (!occ.has(card)) occ.set(card, 1);
    else occ.set(card, occ.get(card) + 1);
  }

  /* we look for the greatest common divisor between all the occurences */
  let arr = [...occ.values()];
  let gcd = arr.reduce(getGcd);
  let partition = gcd >= 2;
  return partition;
};

var getGcd = function (a, b) {
  return a ? getGcd(b % a, a) : b;
};
