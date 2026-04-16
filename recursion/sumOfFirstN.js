function sumOfFirstN(num) {
  if (num <= 0) return 0;
  return num + sumOfFirstN(num - 1);
}

sumOfFirstN(560);
