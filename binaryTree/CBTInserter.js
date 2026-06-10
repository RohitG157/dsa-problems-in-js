var CBTInserter = function (root) {
  this.tRoot = root;
};

/**
 * @param {number} val
 * @return {number}
 */
CBTInserter.prototype.insert = function (val) {
  let q = [this.tRoot];
  let i = 0;
  let curr = q[0];
  while (curr) {
    curr.left && q.push(curr.left);
    curr.right && q.push(curr.right);
    curr = q[++i];
  }
  let parentIndex = Math.floor((i - 1) / 2);
  let parent = q[parentIndex];
  if (!parent.left) {
    parent.left = new TreeNode(val);
  } else {
    parent.right = new TreeNode(val);
  }
  return parent.val;
};

/**
 * @return {TreeNode}
 */
CBTInserter.prototype.get_root = function () {
  return this.tRoot;
};

/**
 * Your CBTInserter object will be instantiated and called as such:
 * var obj = new CBTInserter(root)
 * var param_1 = obj.insert(val)
 * var param_2 = obj.get_root()
 */
