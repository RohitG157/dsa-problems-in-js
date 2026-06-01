var minCameraCover = function (root) {
  function traverse(left, right) {
    if (!left && !right) return 0;
    if (!left || !right) return 1;

    let leftC = traverse(left.left, left.right);
    let rightC = traverse(right.left, right.right);

    return leftC + rightC;
  }
  return traverse(root.left, root.right);
};
