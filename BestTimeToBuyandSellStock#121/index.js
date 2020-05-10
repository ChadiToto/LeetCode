/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let min = Number.MAX_SAFE_INTEGER;
  let globalProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    // while iterating we look for the array currentMin
    if (prices[i] < min) {
      min = prices[i];
    } else {
      // with each current minimum we look for the max difference between it and the elements after it until the next min
      let profit = prices[i] - min;
      globalProfit = globalProfit > profit ? globalProfit : profit;
    }
  }
  return globalProfit;
};
