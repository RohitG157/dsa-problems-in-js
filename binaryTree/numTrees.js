var numTrees = function (n) {
  let twoN = BigInt(1);
  let nPlusOne = BigInt(1);
  let onlyN = BigInt(1);
  for (let i = 2 * n; i >= 1; i--) {
    twoN = twoN * i;
    if (i <= n + 1) {
      
			nPlusOne = nPlusOne * i;
    }
    if (i <= n) {
      onlyN = onlyN * i;
    }
  }
  return twoN / (nPlusOne * onlyN);
};
