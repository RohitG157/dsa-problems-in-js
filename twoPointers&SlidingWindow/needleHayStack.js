var strStr = function (haystack, needle) {
  let i = 0;
  let j = -1;
  let index = -1;
  while (j < haystack.length - 1) {
    if (needle[i] == haystack[j + 1]) {
      index = index == -1 ? j + 1 : index;
      i++;
      j++;
    } else {
      if (index != -1) {
        j = index;
        index = -1;
        i = 0;
      } else {
        j++;
      }
    }
    if (i == needle.length) return index;
  }
  return i == needle.length ? index : -1;
};
