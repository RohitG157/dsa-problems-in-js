var zigzagLevelOrder = function (root) {
  if (!root) return [];
  let i = 0;
  let q = [root];
  let ans = [];
  while (q.length) {
    let lS = q.length;
    let levelArr = [];
    for (let j = 0; j < lS; j++) {
      curr = q.pop();
      if (!ans[i]) ans[i] = [];
      ans[i].push(curr.val);
      if (i % 2 == 0) {
        curr?.right && levelArr.push(curr.right);
        curr?.left && levelArr.push(curr.left);
      } else {
        curr?.left && levelArr.push(curr.left);
        curr?.right && levelArr.push(curr.right);
      }
    }
    q = [...levelArr];
    i++;
  }
  return ans;
};

var zigzagLevelOrder = function (root) {
  if (!root) return [];

  let q = [root];
  let ans = [];
  let level = 0;
  while (q.length) {
    let lS = q.length;
    let levelArr = [];
    for (let i = 0; i < lS; i++) {
      let curr = q.shift();
      if (level % 2 == 0) {
        levelArr.push(curr.val);
      } else {
        levelArr.unshift(curr.val);
      }
      curr.left && q.push(curr.left);
      curr.right && q.push(curr.right);
    }
    ans.push(levelArr);
    level++;
  }
  return ans;
};

var zigzagLevelOrderRecursive = function (root) {
  if (!root) return [];
  let ans = [];
  function traverse(curr, level) {
    if (!ans[level]) ans[level] = [];
    if (level % 2 == 0) {
      ans[level].push(curr.val);
    } else {
      ans[level].unshift(curr.val);
    }

    curr.left && traverse(curr.left, level + 1);
    curr.right && traverse(curr.right, level + 1);
  }
  traverse(root, 0);
  return ans;
};
