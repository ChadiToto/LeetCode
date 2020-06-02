/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {TreeNode} root
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function (root, x, y) {
  // NOTE : BFS WOULD WORK BETTER !!!
  let tree = new Map();
  let parent = new Map();

  DFS(root, 0);

  function DFS(root, depth) {
    tree.set(root.val, depth);
    if (root.left) {
      parent.set(root.left.val, root.val);
      DFS(root.left, depth + 1);
    }
    if (root.right) {
      parent.set(root.right.val, root.val);
      DFS(root.right, depth + 1);
    }
  }

  return tree.get(x) === tree.get(y) && parent.get(x) !== parent.get(y);
};
