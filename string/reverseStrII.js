const reverseStrII = function (s, k) {
  s = s.split("");

  for (let m = 0; m < s.length; m += 2 * k) {
    let i = m;
    let j = Math.min(m + k - 1, s.length - 1);

    reverseStr(s, i, j);
  }

  return s.join("");
};

const reverseStr = function (s, i, j) {
  while (i < j) {
    let temp = s[i];
    s[i] = s[j];
    s[j] = temp;
    i++;
    j--;
  }
};