const bubbleSort = (nums) => {
  for (let i = 0; i < nums.length - 1; i++) {
    let didItemsSwapped = false;
    for (let j = 0; j < nums.length - i - 1; j++) {
      if (nums[j] > nums[j + 1]) {
        let temp = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = temp;
        didItemsSwapped = true;
      }
    }
    if (!didItemsSwapped) return nums;
  }
  return nums;
};
