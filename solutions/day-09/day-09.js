function moveTrain(board, mov) {
  const trainBoard = board.findIndex((path) => path.includes("@"));
  const trainPos = board[trainBoard].indexOf("@");

  const nextPos = {
    U: trainBoard > 0 ? board[trainBoard - 1][trainPos] : undefined,
    D:
      trainBoard < board.length - 1
        ? board[trainBoard + 1][trainPos]
        : undefined,
    L: trainPos > 0 ? board[trainBoard][trainPos - 1] : undefined,
    R:
      trainPos < board[trainBoard].length - 1
        ? board[trainBoard][trainPos + 1]
        : undefined,
  };

  if (nextPos[mov] === "*") return "eat";
  if (nextPos[mov] === "·") return "none";
  return "crash";
}
