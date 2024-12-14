function moveTrain(board, mov) {
  const engineX = board.findIndex((x) => x.includes("@"));
  const engineY = board[engineX].indexOf("@");

  const moves = {
    U: { x: 0, y: -1 },
    R: { x: 1, y: 0 },
    D: { x: 0, y: 1 },
    L: { x: -1, y: 0 },
  };

  if (!board[engineX + moves[mov].y]) return "crash";
  const nextPos = board[engineX + moves[mov].y][engineY + moves[mov].x];

  if (nextPos === "*") return "eat";
  if (nextPos === "·") return "none";
  return "crash";
}
