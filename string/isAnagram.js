var isAnagram = function (s, t) {
  const store = {};
  for (let i = 0; i < s.length; i++) {
    if (store[s[i]]) {
      store[s[i]]++;
    } else {
      store[s[i]] = 1;
    }
  }

  for (let i = 0; i < t.length; i++) {
    if (store[t[i]]) {
      store[t[i]]--;
    } else {
      return false;
    }
  }

  for (let char in store) {
    if (store[char]) {
      return false;
    }
  }
  return true;
};
