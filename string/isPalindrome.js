const isPalindrome = function (s) {
  s = s.split("");
  let i = 0;
  let j = s.length - 1;
  while (i < j) {
    const charI = s[i].toLowerCase();
    const charJ = s[j].toLowerCase();

    if (isAlphaNumeric(charI) && isAlphaNumeric(charJ)) {
      if (charI == charJ) {
        i++;
        j--;
      } else {
        return false;
      }
    }

    if (!isAlphaNumeric(charI)) {
      i++;
    }
    if (!isAlphaNumeric(charJ)) {
      j--;
    }
  }
  return true;
};

const isAlphaNumeric = function (char) {
  const code = char.charCodeAt(0);
  return (
    (code > 47 && code < 58) || // numeric (0-9)
    (code > 64 && code < 91) || // upper alpha (A-Z)
    (code > 96 && code < 123)
  );
};
