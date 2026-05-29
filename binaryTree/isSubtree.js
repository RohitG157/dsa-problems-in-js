var isSubtree = function (root, subRoot) {
  let hashRoot = serialize(root);
  let hashSubRoot = serialize(subRoot);
  return true;
};

var serialize = function (root) {
  let hash = "";
  function traverse(curr) {
    if (!curr) return (hash += "-#");
    hash += "-" + curr.val;
    curr.left && traverse(curr.left);
    curr.right && traverse(curr.right);
  }
  traverse(root);
  return hash;
};
