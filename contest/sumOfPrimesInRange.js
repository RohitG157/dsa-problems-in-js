var sumOfPrimesInRange = function (n) {
  let r = reverseOfNum(n);
  let start = r;
  let end = n;
  if (r > n) {
    start = n;
    end = r;
  }

  let sum = 0;
  for (let i = start; i <= end; i++) {
    if (isPrime(i)) {
      sum += i;
    }
  }

  return sum;
};

function isPrime(n) {
  if (n <= 1) return false;

  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

function reverseOfNum(n) {
  let p = 0;
  while (n) {
    let rem = n % 10;
    p = p * 10 + rem;
    n = Math.floor(n / 10);
  }
  return p;
}
