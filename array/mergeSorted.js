const mergeSorted = (nums1, m, nums2, n) => {
  // [0], 0, [1], 1
  let numsPointer1 = m - 1; // -1
  let numsPointer2 = n - 1; // 0
  let placedPointer = m + n - 1; //0
  if (numsPointer1 < 0) {
    for (let i = 0; i < m + n; i++) {
      nums1[i] = nums2[i];
    }
    return;
  } else if (numsPointer2 < 0) {
    return;
  }
  while (placedPointer > 0) {
    if (nums1[numsPointer1] > nums2[numsPointer2]) {
      nums1[placedPointer] = nums1[numsPointer1];
      numsPointer1--;
    } else {
      nums1[placedPointer] = nums2[numsPointer2];
      numsPointer2--;
    }
    placedPointer--;
    if (numsPointer2 < 0) {
      return;
    }
    if (numsPointer1 < 0) {
      nums1[placedPointer] = nums2[numsPointer2];
    }
  }
};

export default mergeSorted;
/**
 * nums1 = [0] m = 0
 * nums2 = [1] n = 1
 *
 *
 * placedPointer = 6 // m + n -1
 * num1Pointer = 3 // m-1
 * num2Pointer = 2 // n-1
 *
 *
 *
 *
 *
 *
 */
// nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
