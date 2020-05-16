/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
  let greatest = Math.max(...candies);
  let result = [];
  for (let i = 0; i < candies.length; i++) {
    if (candies[i] + extraCandies >= greatest) {
      result.push(true);
    } else {
      result.push(false);
    }
  }
  return result;
};
