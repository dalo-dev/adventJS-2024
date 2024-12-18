function detectBombs(grid) {
  const rowLength = grid.length;
  const columnLength = grid[0].length;
  const directions = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ];
  const result = Array.from({ length: rowLength }, () =>
    Array(columnLength).fill(0)
  );

  for (let i = 0; i < rowLength; i++) {
    for (let j = 0; j < columnLength; j++) {
      let bombCount = 0;
      for (const [r, c] of directions) {
        const nr = i + r;
        const nc = j + c;

        if (
          nr >= 0 &&
          nr < rowLength &&
          nc >= 0 &&
          nc < columnLength &&
          grid[nr][nc]
        ) {
          bombCount++;
        }
      }
      result[i][j] = bombCount;
    }
  }
  return result;
}
