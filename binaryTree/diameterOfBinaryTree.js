var diameterOfBinaryTree = function (root) {
  function longestPath(curr) {
    if (!curr) return 0;

    let leftPath = longestPath(curr.left);
    let rightPath = longestPath(curr.right);

    return 1 + Math.max(leftPath, rightPath);
  }
  let leftPath = longestPath(root.left);
  let rightPath = longestPath(root.right);
  return leftPath + rightPath;
};
