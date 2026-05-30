var lowestCommonAncestor = function (root, p, q) {
  function traverse(curr) {
    if (p.val < curr.val && q.val < curr.val) {
      return traverse(curr.left);
    } else if (p.val > curr.val && q.val > curr.val) {
      return traverse(curr.right);
    } else {
      return curr;
    }
  }
  return traverse(root);
};
