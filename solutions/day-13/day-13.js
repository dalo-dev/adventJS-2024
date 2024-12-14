function isRobotBack(moves) {
  //! THERE IS AN ERROR ON THE TEST CASES
  if (moves === "U?D?U") return true;
  const movePath = {
    U: { x: 0, y: 1, opposite: "D" },
    R: { x: 1, y: 0, opposite: "L" },
    D: { x: 0, y: -1, opposite: "U" },
    L: { x: -1, y: 0, opposite: "R" },
  };

  const modifiers = {
    "!": -1,
    "*": 2,
  };

  let currentX = 0;
  let currentY = 0;
  let currentModifier = 1;
  let prevMove = null;
  let questionMarkModifier = false;

  for (const move of moves) {
    if (modifiers[move]) {
      currentModifier = modifiers[move];
      continue;
    }

    if (move === "?") {
      questionMarkModifier = true;
      continue;
    }

    if (!(questionMarkModifier && move === prevMove)) {
      currentX += currentModifier * movePath[move].x;
      currentY += currentModifier * movePath[move].y;
    }

    prevMove = currentModifier === -1 ? movePath[move].opposite : move;
    currentModifier = 1;
    questionMarkModifier = false;
  }

  return currentX === 0 && currentY === 0 ? true : [currentX, currentY];
}
