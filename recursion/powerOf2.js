const powerOf2 = (nums) => {
  if (nums === 0) return 1;
  return 2 * powerOf2(nums - 1);
};

powerOf2(3);
