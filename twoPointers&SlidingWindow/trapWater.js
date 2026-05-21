var trap = function (height) {
  let i = 0;
  let j = height.length - 1;
  let maxLeft = height[i];
  let maxRight = height[j];
  let totalUnit = 0;
  while (i < j) {
    if (height[i] < height[j]) {
      if (maxLeft < height[i]) {
        maxLeft = height[i];
        i++;
      } else {
        totalUnit += Math.abs(maxLeft - height[i]);
        i++;
      }
    } else {
      if (maxRight < height[j]) {
        maxRight = Math.max(height[j], maxRight);
        j--;
      } else {
        totalUnit += Math.abs(maxRight - height[j]);
        j--;
      }
    }
  }
  return totalUnit;
};
