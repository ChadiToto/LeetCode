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
 * @return {number}
 */
var deepestLeavesSum = function (root) {
  let depth = maxDepth(root);
  let sum = 0;

  const helper = (root, level) => {
    // If a child exists that means we can go deeper
    if (root.left || root.right) {
      if (root.left) helper(root.left, level + 1);
      if (root.right) helper(root.right, level + 1);
    }
    if (!root.left && !root.right && level === depth) {
      // its a leaf
      sum += root.val;
    }
  };
  helper(root, 1);
  return sum;
};

/**
 * This function returns the Depth of the tree
 * @param {*} root - root node of the tree
 */
function maxDepth(root) {
  if (!root) return 0;
  else {
    let lDepth = maxDepth(root.left);
    let rDepth = maxDepth(root.right);

    if (lDepth > rDepth) return lDepth + 1;
    else return rDepth + 1;
  }
}
