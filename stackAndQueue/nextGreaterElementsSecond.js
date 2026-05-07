var nextGreaterElements = function (nums) {
  let stack = [];
  let n = nums.length;
  let ans = Array(n).fill(-1);

  for (let i = 0; i < nums.length; i++) {
    stack.push(nums[i]);
  }

  for (let i = stack.length - 1; i >= 0; i--) {
    const top = stack.pop();
    j = 0;
    while (j < stack.length) {
      if (top < stack[j]) {
        ans[i] = stack[j];
        break;
      }
      j++;
    }
    stack.unshift(top);
  }

  return ans;
};

var nextGreaterElements2 = function (nums) {
  let stack = [];

  let newNums = [...nums, ...nums];
  let n = newNums.length;
  let ans = Array(n).fill(-1);
  ans[n - 1] = -1;
  stack.push(newNums[n - 1]);

  for (let i = n - 2; i >= 0; i--) {
    while (stack.length) {
      const top = stack[stack.length - 1];
      if (newNums[i] < top) {
        ans[i] = top;
        break;
      } else {
        stack.pop();
      }
    }
    stack.push(newNums[i]);
  }

  return ans.slice(0, nums.length);
};

var nextGreaterElements3 = function (newNums) {
  let stack = [];
  let n = newNums.length;
  let ans = Array(n).fill(-1);
  ans[n - 1] = -1;
  stack.push(newNums[n - 1]);

  for (let i = 2 * n - 2; i >= 0; i--) {
    while (stack.length) {
      const top = stack[stack.length - 1];
      if (newNums[i % n] < top) {
        ans[i] = top;
        break;
      } else {
        stack.pop();
      }
    }
    stack.push(newNums[i % n]);
  }

  return ans.slice(0, n);
};
