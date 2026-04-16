const buySell1 = (prices) => {
  let maxProfit = 0;
  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[i] < prices[j]) {
        const profit = prices[j] - prices[i];
        if (profit > maxProfit) {
          maxProfit = profit;
        }
      }
    }
  }
  return maxProfit;
};

buySell1([7, 1, 5, 3, 6, 4]);

const buySell = (prices) => {
  let i = 0;
  let min = prices[0];
  let maxProfitAmt = 0;
  while (i < prices.length) {
    if (min > prices[i + 1]) {
      min = prices[i + 1];
    } else {
      const profit = prices[i + 1] - min;
      if (profit > maxProfitAmt) {
        maxProfitAmt = profit;
      }
    }
    i++;
  }
};

// [7,1,5,3,6,4]
// [7, 13, 1, 5, 6]
