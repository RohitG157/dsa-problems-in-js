var buildTree = function (preorder, inorder) {
  idx = 0;
  function create(subtree) {
    if (!subtree.length) return null;
    if (idx >= preorder.length) return null;
    let store = getStore(subtree);
    let rootIndex = store[preorder[idx]];
    let node = new TreeNode(preorder[idx]);
    idx++;
    node.left = create(subtree.slice(0, rootIndex));
    node.right = create(subtree.slice(rootIndex + 1));

    return node;
  }

  return create(inorder);
};

function getStore(inorder) {
  let store = {};
  for (let i = 0; i < inorder.length; i++) {
    store[inorder[i]] = i;
  }
  return store;
}

// Build tree from inorder and preorder
var buildTree = function (preorder, inorder) {
  idx = 0;

  let store = getStore(inorder);
  function create(left, right) {
    if (left > right) return null;
    if (idx >= preorder.length) return null;
    let rootIndex = store[preorder[idx]];
    let node = new TreeNode(preorder[idx]);
    idx++;
    node.left = create(left, rootIndex - 1);
    node.right = create(rootIndex + 1, right);

    return node;
  }
  return create(0, inorder.length - 1);
};

// Build tree from inorder and postorder
var buildTree = function (inorder, postorder) {
  idx = postorder.length - 1;
  let store = getStore(inorder);
  console.log(store);
  function create(left, right) {
    if (left > right) return null;
    if (idx < 0) return null;
    let rootIndex = store[postorder[idx]];
    let node = new TreeNode(postorder[idx]);
    idx--;
    node.right = create(rootIndex + 1, right);
    node.left = create(left, rootIndex - 1);
    return node;
  }
  return create(0, inorder.length - 1);
};
