var printTree = function (root) {
  function maxLevel(curr, level) {
    if (!curr) return level;
    let leftLevel = maxLevel(curr.left, level + 1);
    let rightLevel = maxLevel(curr.right, level + 1);
    return Math.max(leftLevel, rightLevel);
  }
  const height = maxLevel(root, 0) - 1;
  const m = height + 1;
  const n = 2 ** (height + 1) - 1;
  let ans = Array(m)
    .fill("")
    .map(() => Array(n).fill(""));
  function traverse(curr, i, j) {
    if (!curr) return;
    ans[i][j] = curr.val + "";
    curr.left && traverse(curr.left, i + 1, j - 2 ** (height - i - 1));
    curr.right && traverse(curr.right, i + 1, j + 2 ** (height - i - 1));
  }
  traverse(root, 0, (n - 1) / 2);
  return ans;
};
