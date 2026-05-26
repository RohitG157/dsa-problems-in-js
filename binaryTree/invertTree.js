var invertTree = function (root) {
  function reverse(curr) {
    if (!curr) return null;
    if (!curr.left && !curr.right) return curr;
    let temp = reverse(curr.left);
    curr.left = reverse(curr.right);
    curr.right = temp;
    return curr;
  }
  reverse(root);
  return root;
};
