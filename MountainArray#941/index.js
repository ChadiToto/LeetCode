/**
 * @param {number[]} A
 * @return {boolean}
 */
var validMountainArray = function (A) {
  let i = 1;
  /* we pass through all the increasing numbers */
  while (A[i] >= A[i - 1] && i < A.length) {
    if (A[i] == A[i - 1]) return false;
    else if (A[i] > A[i - 1]) {
      i++;
    }
  }
  /* NOTE : to have a mountain array we need to have at least two strictly increasing number */
  if (i < 2) return false; // return false if there is no increasing numbers;
  if (i == A.length) return false; // a fully increasing array is not a mountain array;

  for (let j = i; j < A.length; j++) {
    // if we encounter a number in the decreasing part of the array that's >= the last number then its not a mountain array
    if (A[j] >= A[j - 1]) return false;
  }

  return true;
};
