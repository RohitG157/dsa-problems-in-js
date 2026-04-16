const factorial = (nums) => {
  if (nums == 1) return 1;
  return nums * factorial(nums - 1);
};

factorial(6);
