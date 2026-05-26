var isSymmetric = function (root) {
  function isMirror(left, right) {
    if (!left && !right) return true;
    if (!left || !right) return false;

    return (
      left.val == right.val &&
      isMirror(left.left, right.right) &&
      isMirror(left.right, right.left)
    );
  }

  return isMirror(root.left, root.right);
};

var isSymmetric = function (root) {
  let dQ = [root.left, root.right];
  while (dQ.length) {
    let levelSize = dQ.length;
    let loopCount = Math.floor(levelSize / 2);
    for (let i = 0; i < loopCount; i++) {
      let left = dQ.shift();
      let right = dQ.pop();

      if (left.val != right.val) {
        return false;
      }
    }
  }
  return true;
};

var isSymmetric = function (root) {
  let dQ = [root.left, root.right];
  while (dQ.length) {
    let levelSize = dQ.length;
    let levelArr = [];
    let loopCount = Math.floor(levelSize / 2);
    for (let i = 0; i < levelSize; i++) {
      let curr = dQ[i];
      curr && levelArr.push(curr?.left);
      curr && levelArr.push(curr?.right);
    }
    for (let i = 0; i < loopCount; i++) {
      let left = dQ.shift();
      let right = dQ.pop();
      if (left?.val != right?.val) {
        return false;
      }
    }
    dQ = [...levelArr];
  }
  return true;
};

var isSymmetric = function (root) {
  let q = [root.left, root.right];

  while (q.length) {
    let p1 = q.shift();
    let p2 = q.shift();
    if (!p1 && !p2) continue;
    if (!p1 || !p2) return false;
    if (p1.val != p2.val) return false;

    q.push(p1.left, p2.right);
    q.push(p1.right, p2.left);
  }
  return true;
};
