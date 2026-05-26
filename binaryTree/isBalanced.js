var isBalanced = function (root) {
  let ans = true;
  function findLevels(curr) {
    if (!curr) return 0;

    let leftHieght = findLevels(curr.left);
    let rightHeight = findLevels(curr.right);
    if (Math.abs(leftHeight - rightHeight) > 1) {
      return ans && false;
    }
    return 1 + Math.max(leftHieght, rightHeight);
  }
  findLevels(root);
  return ans;
};
