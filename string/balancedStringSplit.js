var balancedStringSplit = function (s) {
  let store = {};
  //* RLRRLLRLRL
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (Object.keys(store).length && s[i - 1]) {
      if (s[i - 1] == s[i]) {
        store[s[i]]++;
      } else {
        if (store["R"] == store["L"]) {
          count++;
          store = {};
          store[s[i]] = 1;
        } else {
          store[s[i]] = store[s[i]] ? store[s[i]]++ : 1;
        }
      }
    } else {
      store[s[i]] = 1;
    }
  }
  return store["L"] == store["R"] ? ++count : count;
};
