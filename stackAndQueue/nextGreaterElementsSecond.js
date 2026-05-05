var nextGreaterElements = function (nums) {
  let stack = [];
  for (let i = nums.length - 1; i >= 0; i--) {
    stack.push(nums[i]);
  }

  console.log(nums, stack);
};
