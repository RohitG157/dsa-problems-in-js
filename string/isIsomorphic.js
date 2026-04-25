var isIsomorphic = function (s, t) {
  if (s.length != t.length) return false;
  let store = {};
  for (let i = 0; i < s.length; i++) {
    if (store[s[i]] && store[s[i]] != t[i]) {
      return false;
    } else {
      store[s[i]] = t[i];
    }
  }
  return true;
};
