function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
var postorderTraversal = function (root) {
  let ans = [];
  function traversal(curr) {
    // left -> right -> root
    if (!curr) return;
    traversal(curr.left);
    traversal(curr.right);
    ans.push(curr.val);
  }
  traversal(root);
  return ans;
};

var postOrder = function (root) {
  let s1 = [root];
  let s2 = [];
  let ans = [];

  while (s1.length) {
    curr = s1.pop();
    curr && s2.push(curr);
    curr?.left && s1.push(curr.left);
    curr?.right && s1.push(curr.right);
  }

  while (s2.length) {
    ans.push(s2.pop().val);
  }
  return ans;
};

var postorderOneStack = function (root) {
  let stack = [];
  let curr = root;
  let ans = [];
  let lastVisited = null;
  while (curr || stack.length) {
    while (curr) {
      stack.push(curr);
      curr = curr.left;
    }

    let peek = stack[stack.length - 1];
    if (peek.right && peek.right != lastVisited) {
      curr = peek.right;
    } else {
      ans.push(peek.val);
      lastVisited = stack.pop();
    }
  }
  return ans;
};
