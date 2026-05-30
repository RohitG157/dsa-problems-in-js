var kthSmallest = function (root, k) {
  let ans = [];
  function traverse(curr) {
    if (!curr) return;
    curr.left && traverse(curr.left);
    ans.push(curr.val);
    curr.right && traverse(curr.right);
  }
  traverse(root);
  return ans[k - 1];
};

var kthSmallest = function (root, k) {
  let count = 0;
  let ans = 0;
  function traverse(curr) {
    if (!curr) return;
    curr.left && traverse(curr.left);
    count++;
    if (count == k) {
      ans = curr.val;
    }
    curr.right && traverse(curr.right);
  }
  traverse(root);
  return ans;
};
