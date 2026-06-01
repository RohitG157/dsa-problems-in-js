var isUnivalTree = function (root) {
  let ans = true;
  function traverse(curr) {
    if (!curr) return null;
    if (!curr.left && !curr.right) return curr.val;
    let left = traverse(curr.left);
    let right = traverse(curr.right);
    if (left != null && left != curr.val) ans = ans & false;
    if (right != null && right != curr.val) ans = ans & false;
    return curr.val;
  }
  traverse(root);
  return ans;
};
