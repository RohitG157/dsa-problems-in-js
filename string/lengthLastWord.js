const lengthLastWordFirstApproach = function (s) {
  const s = s.trim();
  const sArr = s.join(" ");
  return sArr[sArr.length - 1].length;
};

const lengthLastWordSecondApproach = function (s) {
  // "   fly me   to   the moon  "
  let countWord = 0;
  for (let i = s.length - 1; i > 0; i--) {
    if (s[i] != " ") {
      countWord++;
      if (s[i + 1] == " ") {
        return countWord;
      }
    }
  }
};
