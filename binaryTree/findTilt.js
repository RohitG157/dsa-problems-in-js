var findTilt = function (root) {
  let totalSum = 0;
  function traverse(curr) {
    if (!curr) return 0;
    let leftSum = traverse(curr.left);
    let rightSum = traverse(curr.right);

    total = curr.val + leftSum + rightSum;
    totalSum += Math.abs(leftSum - rightSum);
    return total;
  }
  traverse(root);
  return totalSum;
};
