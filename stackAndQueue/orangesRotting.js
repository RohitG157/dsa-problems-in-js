var orangesRotting = function (grid) {
  let m = grid.length;
  let n = grid[0].length;

  let queue = [];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] == 2) {
        queue.push([i, j, 0]);
      }
    }
  }

  let minutes = 0;

  while (queue.length) {
    let [x, y, minute] = queue.shift();
    console.log(grid[0]);
    console.log(grid[1]);
    console.log(grid[2]);
    console.log("-----------");
    if (x < m - 1 && grid[x + 1][y] == 1) {
      grid[x + 1][y] = 2;
      queue.push([x + 1, y, minute + 1]);
    }

    if (x > 0 && grid[x - 1][y] == 1) {
      grid[x - 1][y] = 2;
      queue.push([x - 1, y, minute + 1]);
    }

    if (y < n - 1 && grid[x][y + 1] == 1) {
      grid[x][y + 1] = 2;
      queue.push([x, y + 1, minute + 1]);
    }

    if (y > 0 && grid[x][y - 1] == 1) {
      grid[x][y - 1] = 2;
      queue.push([x, y - 1, minute + 1]);
    }
    minutes = Math.max(minute, minutes);
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] == 1) {
        return -1;
      }
    }
  }

  return minutes;
};
orangesRotting([
  [2, 1, 1],
  [1, 1, 0],
  [0, 1, 1],
]);
