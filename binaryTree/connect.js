var connect = function (root) {
  if (!root) return root;
  let ans = [];
  let q = [root];
  while (q.length) {
    let levelSize = q.length;
    let levelArr = [];
    for (let i = 0; i < levelSize; i++) {
      let curr = q.shift();
      curr.next = q[0] ? q[0] : null;
      curr.left && levelArr.push(curr.left);
      curr.right && levelArr.push(curr.right);
    }
    q = [...levelArr];
  }
  return root;
};

var connect = function (root) {
  if (!root) return root;
  function traverse(curr) {
    if (curr.left) {
      curr.left.next = curr.right;
    }
    if (curr.right && curr.next) {
      curr.right.next = curr.next.left;
    }

    curr.left && traverse(curr.left);
    curr.right && traverse(curr.right);
  }

  traverse(root);
  return root;
};
