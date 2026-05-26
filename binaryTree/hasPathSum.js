var hasPathSum = function (root, targetSum) {
  if (!root) return false;
  let ans = false;
  function fS(curr, sum) {
    const newSum = sum - curr.val;
    if (!curr.left && !curr.right) {
      if (newSum == 0) {
        ans = ans || true;
      }
    }
    curr.left && fS(curr.left, newSum);
    curr.right && fS(curr.right, newSum);
  }
  fS(root, targetSum);
  return ans;
};
