var groupAnagramsSortedSolution = function (strs) {
  let map = {};
  for (let i = 0; i < strs.length; i++) {
    const sortedStr = strs[i].split("").sort().join("");
    if (!map[sortedStr]) {
      map[sortedStr] = [strs[i]];
    } else {
      map[sortedStr].push(strs[i]);
    }
  }
  return [...Object.values(map)];
};

var groupAnagramsHashedSolution = function (strs) {
  for (let i = 0; i < strs.length; i++) {
    let freqArr = Array(26).fill(0);
    let s = strs[i];
    for (let j = 0; j < strs[i].length; j++) {
      let pos = s[j].charCodeAt() - "a".charCodeAt();
      freqArr[pos]++;
    }

    let key = "";
    for (let k = 0; k < 26; k++) {
      key = key + String.fromCharCode(k) + freqArr[k];
    }

    if (!map[key]) {
      map[key] = [s];
    } else {
      map[key].push(s);
    }
  }

  return [...Object.values(map)];
};
