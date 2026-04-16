import mergeSorted from "../array/mergeSorted";

const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  return mergeSorted(left, right);
};

const mergeSorted = (nums1, nums2) => {
  // nums1 = [1, 2, 4] nums2 = [2, 3]
  let nums = []; // [1, 2, 2, 3, 4]
  let k = 0; // 5
  let i = 0; // 3
  let j = 0; // 2
  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] < nums2[j]) {
      nums.push(nums1[i]);
      i++;
    } else {
      nums.push(nums2[j]);
      j++;
    }
  }
  return [...nums, ...nums1.slice(i), ...nums2.slice(j)];
};

mergeSort([]);

/**
 *
 *
 *
 */
