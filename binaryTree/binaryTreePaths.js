var binaryTreePaths = function (root) {
  let ans = [];
  function traverse(curr, path = "") {
    if (!curr.left && !curr.right) {
      path = path + curr.val;
      ans.push(path);
      return;
    }
    path = path + curr.val + "->";
    curr.left && traverse(curr.left, path);
    curr.right && traverse(curr.right, path);
  }
  traverse(root);
  return ans;
};
