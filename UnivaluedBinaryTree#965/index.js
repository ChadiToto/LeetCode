/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isUnivalTree = function (root) {
  if (!root) return true;

  let isLeft = true;
  let isRight = true;
  if (root.left) {
    isLeft = root.val === root.left.val && isUnivalTree(root.left);
  }
  if (root.right) {
    isRight = root.val === root.right.val && isUnivalTree(root.right);
  }

  return isRight && isLeft;
};
