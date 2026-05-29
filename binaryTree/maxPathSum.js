var maxPathSum = function (root) {
  let max = -Infinity;
  let traverse = (curr) => {
    if (!curr) return 0;

    let sumTillLeft = Math.max(0, traverse(curr.left));
    let sumTillRight = Math.max(0, traverse(curr.right));
    sum = curr.val + sumTillLeft + sumTillRight;
    max = Math.max(sum, max);

    return curr.val + Math.max(sumTillLeft, sumTillRight);
  };
  traverse(root);
  return max;
};
