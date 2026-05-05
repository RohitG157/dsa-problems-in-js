var countOppositeParity = function (nums) {
  const lastEle;
  const store = {};
  const oddCount = 0;
  const evenCount = 0;
  for (let i = nums.length - 1; i >= 0; i--) {
    lastEle = stack.pop();
    let partiyOfNum = 0;
    if (lastEle % 2) {
      evenCount++;
    } else {
      oddCount++;
    }
    if (nums[i + 1] && nums[i + 1] % 2) {
      partiyOfNum = evenCount;
    } else if (nums[i + 1] && !(nums[i + 1] % 2)) {
      partiyOfNum = oddCount;
    }
    store[i] = partiyOfNum;
  }
};
