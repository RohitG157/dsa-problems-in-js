var goodNodes = function (root) {
  let goodNodeCount = 0;
  function traverse(curr, max) {
    if (!curr) return;
    if (max < curr.val) {
      max = curr.val;
      goodNodeCount++;
    }
    traverse(curr.left, max);
    traverse(curr.right, max);
  }

  traverse(root, root.val);
  return goodNodeCount;
};
