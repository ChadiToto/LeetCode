/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number = function (num) {
  num = num.toString().split("");
  let i = 0;
  while (num[i] == "9" && i < num.length - 1) i++;
  num[i] = "9";
  return num.join("");
};
