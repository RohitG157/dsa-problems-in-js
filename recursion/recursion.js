function printNToOne(num) {
  console.log(num);
  if (num === 1) return;
  printNToOne(num - 1);
}

printNToOne(10);

function printOneToN(num) {
  if (num > 10) return;
  console.log(num);
  printOneToN(num + 1);
}

printOneToN(1);
