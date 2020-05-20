/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function (S, T) {
  let stackS = [];
  let stackT = [];

  /* we push each non '#' char to their respective stack , if we encounter a '#' we pop the last element */
  for (let i = 0; i < S.length; i++) {
    if (S.charAt(i) != "#") stackS.push(S.charAt(i));
    else stackS.pop();
  }

  /* same approach */
  for (let i = 0; i < T.length; i++) {
    if (T.charAt(i) != "#") stackT.push(T.charAt(i));
    else stackT.pop();
  }

  /*Comparaison*/
  return stackS.join("") == stackT.join("");
};
