var isValid = function (s) {
  s = s.split("");
  if (s.length < 2) return false;
  if (s[0] == "]" || s[0] == "}" || s[0] == ")") return false;
  const store = [];
  const loopCount = s.length;
  for (let i = 0; i < loopCount; i++) {
    if (s[i] == "[" || s[i] == "{" || s[i] == "(") {
      store.push(s[i]);
    } else {
      const closeBracket = s[i];
      if (closeBracket == ")" && store[store.length - 1] == "(") {
        store.pop();
      } else if (closeBracket == "]" && store[store.length - 1] == "[") {
        store.pop();
      } else if (closeBracket == "}" && store[store.length - 1] == "{") {
        store.pop();
      } else {
        return false;
      }
    }
  }
  return store.length == 0;
};

var isValid2 = function (s) {
  s = s.split("");
  let map = {
    "{": "}",
    "[": "]",
    "(": ")",
  };
  let store = [];
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]]) {
      store.push(s[i]);
    } else {
      const top = store.pop();
      if (!top || s[i] != map[top]) {
        return false;
      }
    }
  }
  return store.length == 0;
};
