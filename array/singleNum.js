const singleNum = (nums) => {
  const record = {};
  for (let i = 0; i < nums.length; i++) {
    if (record[nums[i]]) {
      record[nums[i]]++;
    } else {
      record[nums[i]] = 1;
    }
  }
  for (let i = 0; i < nums.length; i++) {
    if (record[nums[i]] == 1) {
      return +nums[i];
    }
  }
};

const singleNum2 = (nums) => {
  let xor = 0;
  for (let i = 0; i < nums.length; i++) {
    xor = xor ^ nums[i];
  }
  return xor;
};
