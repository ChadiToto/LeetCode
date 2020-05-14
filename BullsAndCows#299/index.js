/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function (secret, guess) {
  secret = secret.split(""); // turn variable into char arrays
  guess = guess.split("");
  let occurence = new Map();
  let A = 0;
  let B = 0;
  for (let i = 0; i < secret.length; ) {
    if (guess[i] == secret[i]) {
      // get all bulls
      A++;
      secret.splice(i, 1);
      guess.splice(i, 1);
    } else {
      if (occurence.has(secret[i]))
        occurence.set(secret[i], occurence.get(secret[i]) + 1);
      else occurence.set(secret[i], 1);
      i++;
    }
  }

  for (let digit of guess) {
    // get all cows
    if (occurence.has(digit) && occurence.get(digit) != 0) {
      B++;
      occurence.set(digit, occurence.get(digit) - 1);
    }
  }
  return `${A}A${B}B`;
};
