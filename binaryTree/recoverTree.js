var recoverTree = function (root) {
  let prev = null,
    first = null,
    second = null;
  function traverse(curr) {
    if (!curr) return null;
    traverse(curr.left);
    if (prev && prev.val >= curr.val) {
      if (!first) {
        first = prev;
      }
      second = curr;
    }
    prev = curr;
    traverse(curr.right);
  }
  traverse(root);
  [first.val, second.val] = [second.val, first.val];
  return root;
};
