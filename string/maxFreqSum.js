var maxFreqSum = function (s) {
  let maxVowel = 0;
  let maxConsonant = 0;

  let store = {};

  for (let i = 0; i < s.length; i++) {
    if (store[s[i]]) {
      store[s[i]]++;
    } else {
      store[s[i]] = 1;
    }
  }

  for (const alphabet in store) {
    if (
      alphabet == "a" ||
      alphabet == "e" ||
      alphabet == "i" ||
      alphabet == "o" ||
      alphabet == "u" ||
      alphabet == "A" ||
      alphabet == "E" ||
      alphabet == "I" ||
      alphabet == "O" ||
      alphabet == "U"
    ) {
      if (maxVowel < store[alphabet]) {
        maxVowel = store[alphabet];
      }
    } else {
      if (maxConsonant < store[alphabet]) {
        maxConsonant = store[alphabet];
      }
    }
  }
  return maxVowel + maxConsonant;
};
