var lowestCommonAncestor = function (root, p, q) {
  let lca = null;
  function traverse(curr) {
    if (!curr) return 0;
    let count = 0;
    let ansOnLeft = traverse(curr.left);
    let ansOnRight = traverse(curr.right);
    if (curr.val == p.val || curr.val == q.val) {
      count++;
    }
		count = count + ansOnLeft + ansOnRight;
    if (count == 2 && !lca) {
      lca = curr;
    }
    return count;
  }
  traverse(root);
  return lca;
};
