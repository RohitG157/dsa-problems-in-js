const insertionSort = (nums) => {
  for (let i = 1; i < nums.length; i++) {
    let prev = i - 1;
    const current = nums[i];
    while (nums[prev] > current && prev >= 0) {
      nums[prev + 1] = nums[prev];
      prev--;
    }
    nums[prev + 1] = current;
  }
  return nums;
};
