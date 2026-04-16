const binarySearch = (nums, target) => {
  // [[2,5]] target = 5
  let start = 0; // 1
  let end = nums.length - 1; // 1
  while (end >= start) {
    const middle = Math.floor((start + end) / 2); // 1
    if (nums[middle] === target) return middle;
    if (nums[middle] < target) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }
  return -1;
};
