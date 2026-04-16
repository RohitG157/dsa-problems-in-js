const maxConsecutiveOnes = (nums) => {
  let maxOnes = 0;
  let count = 0;
  let foundZero = false;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      count = foundZero ? 1 : count + 1;
      foundZero = false;
    } else {
      foundZero = true;
      maxOnes = maxOnes < count ? count : maxOnes;
    }
  }
  return maxOnes < count ? count : maxOnes;
};

/**
 *
 * [1, 1, 0, 1, 1, 1]
 *
 */
