var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let l = 1;
    let r = n;
    while (l <= r) {
      const m = Math.floor((l + r) / 2);
      const badVersion = isBadVersion(m - 1);
      if (m < 1 && isBadVersion(m)) {
        return m;
      } else if (!isBadVersion(m - 1) && isBadVersion(m)) {
        return m;
      } else if (isBadVersion(m - 1) && isBadVersion(m)) {
        r = m - 1;
      } else if (!isBadVersion(m - 1) & !isBadVersion(m)) {
        l = m + 1;
      }
    }
  };
};

// [1, 2, 3, 4, 5]
// firstBadVersion = 2;
