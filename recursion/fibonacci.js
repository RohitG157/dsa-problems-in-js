//0, 1, 1, 2, 3, 5, 8, 13, 21, 34,

const fibonacci = (num) => {
  if (num === 0) return 0;
  if (num === 1) return 1;

  return fibonacci(num - 1) + fibonacci(num - 2);
};

fibonacci(1);
