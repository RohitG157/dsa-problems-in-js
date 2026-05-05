var nextGreaterElement = function (nums1, nums2) {
  let stack = [];
  let nextGreaterEle = {};
  for (let i = nums2.length - 1; i >= 0; i--) {
    if (nums2[i] < stack[stack.length - 1]) {
      nextGreaterEle[nums2[i]] = stack[stack.length - 1];
    } else {
      for (let j = stack.length - 1; j >= 0; j--) {
        const lastEle = stack[j];
        if (nums2[i] < lastEle) {
          nextGreaterEle[nums2[i]] = lastEle;
          break;
        } else {
          stack.pop();
        }
      }
      nextGreaterEle[nums2[i]] = nextGreaterEle[nums2[i]]
        ? nextGreaterEle[nums2[i]]
        : -1;
    }
    stack.push(nums2[i]);
  }

  for (let i = 0; i < nums1.length; i++) {
    nums1[i] = nextGreaterEle[nums1[i]];
  }

  return nums1;
};

nextGreaterElement([1], [1, 0, 5]);
