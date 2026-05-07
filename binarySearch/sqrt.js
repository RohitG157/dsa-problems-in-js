var mySqrt = function (x) {
  let min = 0;
  let max = x;
  while (min != max) {
    const mid = Math.floor((min + max) / 2);
    const square = mid * mid;
    if (square == x) {
      return mid;
    } else if (square < x) {
      min = mid;
    } else if (square > x) {
      max = mid;
    }
  }
  return Math.floor((min + max) / 2);
};
