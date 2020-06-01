/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function (paragraph, banned) {
  let common = new Map();

  /* Remove Punctuation And Lower case */
  paragraph = paragraph.replace(/[^a-zA-Z ]/g, " ").toLowerCase();
  paragraph = paragraph.split(" ");

  for (let i = 0; i < paragraph.length; i++) {
    if (!common.has(paragraph[i])) common.set(paragraph[i], 1);
    else common.set(paragraph[i], common.get(paragraph[i]) + 1);
  }

  /* Delete banned words */
  for (let i = 0; i < banned.length; i++) {
    if (common.has(banned[i])) common.delete(banned[i]);
    if (common.has("")) common.delete("");
  }
  console.log(common);

  /* Calculation */

  let result = [...common.entries()].reduce((a, e) => (e[1] > a[1] ? e : a));
  return result[0];
};
