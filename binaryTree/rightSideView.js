var rightSideView = function (root) {
  if (!root) return [];
  let ans = [];
  function traverse(curr, level) {
    if (!curr) return;
    if (!ans[level]) ans[level] = [];
    ans[level].push(curr.val);
    traverse(curr.right, level + 1);
    traverse(curr.left, level + 1);
  }

  traverse(root, 0);
  let res = [];
  for (let i = 0; i < ans.length; i++) {
    res.push(ans[i][0]);
  }

  return res;
};

var rightSideView = function (root) {
  if (!root) return [];
  let ans = [];
  function traverse(curr, level) {
    if (!curr) return;
    if (ans[level] == null || ans[level] == undefined) ans[level] = curr.val;
    traverse(curr.right, level + 1);
    traverse(curr.left, level + 1);
  }

  traverse(root, 0);
  return ans;
};
