const selectionSort = (nums) => {
  for (let i = 0; i < nums.length - 1; i++) {
    let min = nums[i];
    let minIndex = i;
    for (let j = i; j < nums.length; j++) {
      if (min > nums[j]) {
        min = nums[j];
        minIndex = j;
      }
    }
    let temp = nums[minIndex];
    nums[minIndex] = nums[i];
    nums[i] = temp;
  }
  return nums;
};
