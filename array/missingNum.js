const missingNum = (nums) => {
  let max = 0,
    sum = 0,
    isZero = false;

  for (let i = 0; i < nums.length; i++) {
    isZero = isZero ? true : nums[i] === 0 ? true : false;
    max = max < nums[i] ? nums[i] : max;
    sum = sum + nums[i];
  }
  const actualSum = (max * (max + 1)) / 2;
  return !isZero ? 0 : (actualSum === sum) ? max + 1 : actualSum - sum;
};
