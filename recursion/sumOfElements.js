function sumOfElements(nums, i) {
  if (i == 0) return 0;
  return nums[i-1] + sumOfElements(nums, i - 1);
}

sumOfElements([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6].length);
