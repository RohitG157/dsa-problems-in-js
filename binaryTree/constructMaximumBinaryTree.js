var constructMaximumBinaryTree = function (nums) {
  function traverse(arr) {
    let maxIndex = findMax(arr);
    let maxNode = new TreeNode(arr[maxIndex]);
    let leftArr = arr.slice(0, maxIndex);
    let rightArr = arr.slice(maxIndex + 1);
    maxNode.left = leftArr.length ? traverse(leftArr) : null;
    maxNode.right = rightArr.length ? traverse(rightArr) : null;
    return maxNode;
  }
  return traverse(nums);
};

function findMax(arr) {
  let max = arr[0];
  let maxIndex = 0;
  for (let i = 1; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
      maxIndex = i;
    }
  }
  return maxIndex;
}
