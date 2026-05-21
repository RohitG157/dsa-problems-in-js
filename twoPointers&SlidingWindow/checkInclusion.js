var checkInclusion = function (s1, s2) {
  let m = s1.length;
  let n = s2.length;
  let charFreq = Array(26).fill(0);
  let sum = m;
  // fill the array with char occurence
  for (let i = 0; i < m; i++) {
    charFreq[s1.charCodeAt(i) - 97]++;
  }

  let j = 0;
  let i = 0;
  let copyArr = [...charFreq];
  while (j < n) {
    // check if s2 char exist in the freq arr
    if (copyArr[s2.charCodeAt(j) - 97] > 0) {
      copyArr[s2.charCodeAt(j) - 97]--;
      sum--;
      if (sum == 0 && j - i + 1 == m) {
        return true;
      } else if (sum > 0 && j - i + 1 == m) {
        return false;
      } else if (sum > 0 && j - i + 1 < m) {
        j++;
      }
    } else {
      j = charFreq[s2.charCodeAt(j) - 97] > 0 ? i + 1 : j + 1;
      i = j;
      copyArr = [...charFreq];
      sum = m;
    }
  }
  return sum <= 0;
};

var isValidPermutation = function (arr) {
  sum = 0;
  if (!arr) {
    return false;
  }

  for (let i = 0; i < 26; i++) {
    sum += arr[i];
  }
  return sum == 0;
};
