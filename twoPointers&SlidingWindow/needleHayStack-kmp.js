var strStr = function (haystack, needle) {
  let i = 0;
  let j = 1;
  let lps = [0];
  let m = haystack.length;
  let n = needle.length;

  // Calculate the LPS (Longest Prefix Suffix) array
  while (j < n) {
    if (needle[i] == needle[j]) {
      lps[j] = i + 1;
      i++;
      j++;
    } else {
      if (i == 0) {
        lps[j] = 0;
        j++;
      } else {
        i = lps[i - 1];
      }
    }
  }

  i = j = 0;
  while (i < m) {
    if (needle[j] == haystack[i]) {
      i++;
      j++;
    } else {
      if (j == 0) {
        i++;
      } else {
        j = lps[j - 1];
      }
    }

    if (j === n) {
      return i - n;
    }
  }
  return -1;
};
