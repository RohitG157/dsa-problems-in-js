var characterReplacement = function (s, k) {
  let i = 0;
  let j = 0;
  let longestRepeatedS = 0;
  let map = Array(26).fill(0);
  map[s[0].charCodeAt(0) - 65] = 1;
  while (j < s.length) {
    if (isWindowValid(map, k)) {
      const alphaIndex = s.charCodeAt(j) - 65;
      longestRepeatedS = Math.max(longestRepeatedS, j - i + 1);
      j++;
      map[alphaIndex] = !map[alphaIndex] ? 1 : map[alphaIndex] + 1;
    } else {
      const alphaIndex = s.charCodeAt(i) - 65;
      map[alphaIndex]--;
      i++;
    }
  }
  return longestRepeatedS;
};

function isWindowValid(map, k) {
  let totalCount = 0;
  let maxCount = 0;
  for (let i = 0; i < 26; i++) {
    const char = String.fromCharCode(65 + i);
    totalCount += map[char];
    maxCount = Math.max(maxCount, map[char]);
  }
  return totalCount - maxCount <= k;
}
