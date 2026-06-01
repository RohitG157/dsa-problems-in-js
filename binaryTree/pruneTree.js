var pruneTree = function (root) {
  function traverse(curr) {
    if (!curr) return 0;
    let left = traverse(curr.left);
    let right = traverse(curr.right);
    left == 0 && (curr.left = null);
    right == 0 && (curr.right = null);
    leftSum = left + curr.val;
    rightSum = right + curr.val;
    return Math.max(leftSum, rightSum);
  }
  return traverse(root) == 0 ? null : root;
};
