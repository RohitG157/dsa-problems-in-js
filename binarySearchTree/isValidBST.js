var isValidBST = function (curr, low = null, high = null) {
  if (!curr) return true;
  if ((low != null && curr.val <= low) || (high != null && curr.val >= high)) {
    return false;
  }
  let isLeftBST = isValidBST(curr.left, low, curr.val);
  let isRightBST = isValidBST(curr.right, curr.val, high);

  return isLeftBST && isRightBST;
};
