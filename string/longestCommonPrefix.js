var longestCommonPrefix = function (strs) {
  if (!strs.length) return "";
  let prefix = strs[0];
  let index = 0;
  for (let i = 1; i < strs.length; i++) {
    if (prefix.length > strs[i].length) {
      prefix = strs[i];
      index = i;
    }
  }
  let isPrefixAvailable = true;
  let res = "";
  for (let i = 0; i < prefix.length; i++) {
    for (let j = 0; j < strs.length; j++) {
      if (index != j && prefix[i] != strs[j][i]) {
        isPrefixAvailable = false;
        return "";
      }
    }
    if (isPrefixAvailable) {
      res = res + prefix[i];
    }
  }
  return res;
};
