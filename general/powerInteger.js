var powerInteger = function (k) {
  let hash = { 1: true };
  for (let i = 1; i <= k; i++) {
    !hash[2 * i] && ans.push(2 * i);
    !hash[2 * i] && (hash[2 * i] = true);
    !hash[3 * i] && ans.push(3 * i);
    !hash[3 * i] && (hash[3 * i] = true);
    !hash[5 * i] && ans.push(5 * i);
    !hash[5 * i] && (hash[5 * i] = true);
  }
  return ans[k];
};
