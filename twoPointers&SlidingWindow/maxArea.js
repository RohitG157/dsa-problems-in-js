var maxArea = function (height) {
  let i = 0;
  let j = height.length - 1;
  let maxArea = 0;
  while (i < j) {
    const width = j - i;
    const minHeight = height[j] > height[i] ? height[i] : height[j];
    const area = width * minHeight;
    if (area > maxArea) {
      maxArea = area;
    }
    if (height[j] > height[i]) {
      i++;
    } else {
      j++;
    }
  }
  return maxArea;
};
