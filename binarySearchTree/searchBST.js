var searchBST = function (root, val) {
  let ans = null;
  function findValInBST(curr) {
    if (!curr) return;
    if (val == curr.val) ans = curr;

    if (curr.left && val < curr.val) findValInBST(curr.left);
    if (curr.right && val > curr.val) findValInBST(curr.right);
  }
  findValInBST(root);
  return ans;
};
