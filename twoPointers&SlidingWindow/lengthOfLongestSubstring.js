var lengthOfLongestSubstring = function (s) {
  let i = (j = 0);
  let store = {};
	let maxWSize = 0;
  while (j < s.length) {
    if (store[s[j]] != undefined && store[s[j]] >= i) {
      i = store[s[j]] + 1;
    }
    const wSize = j - i + 1;
    maxWSize = Math.max(wSize, maxWSize);
    store[s[j]] = j;
    j++;
  }
  return maxWSize;
};
