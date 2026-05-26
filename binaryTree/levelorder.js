var levelOrder = function (root) {
  if (!root) return [];
  let q = [[root]];
  let res = [];
  while (q.length) {
    let qSib = q.shift();
    let ans = [];
    while (qSib.length) {
      let curr = qSib.shift();
      curr & ans.push(curr.val);
      if (curr.left || curr.right) {
        if (!Array.isArray(q[0])) {
          q[0] = [];
        }
        if (curr.left) {
          q[0].push(curr.left);
        }
        if (curr.right) {
          q[0].push(curr.right);
        }
      }
    }
    res.push(ans);
  }
  return res;
};

var levelOrder = function (root) {
  if (!root) return [];
  let q = [root];
  let ans = [];
  while (q.length) {
    let levelSize = q.length;
    let levelArr = [];
    for (let i = 0; i < levelSize; i++) {
      let curr = q.shift();
      curr.left && q.push(curr.left);
      curr.right && q.push(curr.right);
      levelArr.push(curr.val);
    }
    ans.push(levelArr);
  }
  return ans;
};

var levelOrder = function (root) {
  let ans = [];
  function traversal(curr, level) {
    if(!curr) return;
    if (!ans[level]) ans[level] = [];
    ans[level].push(curr.val);
    traversal(curr.left, level + 1);
    traversal(curr.right, level + 1);
  }
  traversal(root, 0);
  return ans;
};
// ans = [3]
