var rangeSumBST = function (root, low, high) {
  let sum = 0;
  function traverse(curr) {
    if (!curr) return;

    curr.left && traverse(curr.left);
    if (curr.val >= low && curr.val <= high) {
      sum += curr.val;
    }
    curr.right && traverse(curr.right);
  }
  traverse(root);
};
