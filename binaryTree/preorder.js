function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var preorderTraversal = function (root) {
  let ans = [];
  function traversal(curr) {
    // root -> left -> right
    if (!curr) return;
    ans.push(curr.val);
    traversal(curr.left);
    traversal(curr.right);
  }

  traversal(root);
  return ans;
};

var preOrderTraversalIterative = function (root) {
  let stack = [root];
  let ans = [];
  while (stack.length) {
    const curr = stack.pop();
    curr && ans.push(curr.val);
    curr?.right && stack.push(curr.right);
    curr?.left && stack.push(curr.left);
  }
  return ans;
};
