var maxDepth = function (root) {
  function maximum(curr) {
    if (!curr) return 0;
    return Math.max(1 + maximum(curr?.left), 1 + maximum(curr?.right));
  }
  return maximum(root);
};
