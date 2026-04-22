var numJewelsInStones = function (jewels, stones) {
  let count = 0;
  for (let i = 0; i < jewels.length; i++) {
    for (let j = 0; j < stones.length; j++) {
      if (jewels[i] === stones[j]) {
        count++;
      }
    }
  }
  return count;
};

var numJewelsInStonesUsingSet = function (jewels, stones) {
  let set = new Set();
  for (let i = 0; i < jewels.length; i++) {
    set.add(jewels[i]);
  }
  let count = 0;
  for (let i = 0; i < stones.length; i++) {
    set.has(stones[i]) && ++count;
  }
  return count;
};

var numJewelsInStonesUsingObject = function (jewels, stones) {
  let set = {};
  for (let i = 0; i < jewels.length; i++) {
    set[jewels[i]] = 0;
  }
  let count = 0;
  for (let i = 0; i < stones.length; i++) {
    if (set[stones[i]] || set[stones[i]] == 0) {
      count++;
    }
  }
  return count;
};

numJewelsInStones("z", "ZZ");
