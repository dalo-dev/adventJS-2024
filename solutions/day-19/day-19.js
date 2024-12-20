function distributeWeight(weight) {
  const boxRepresentations = {
    1: [" _ ", "|_|"],
    2: [" ___ ", "|___|"],
    5: [" _____ ", "|     |", "|_____|"],
    10: [" _________ ", "|         |", "|_________|"],
  };
  const boxes = [];
  let currentBoxRepresentation = 10;
  let currentWeight = weight;
  let prevBoxLength = 0;
  while (currentWeight > 0 && currentBoxRepresentation !== 0) {
    const weightLeft = currentWeight - currentBoxRepresentation;
    if (weightLeft >= 0) {
      const box = boxRepresentations[currentBoxRepresentation];
      if (prevBoxLength)
        box[box.length - 1] = box[box.length - 1].padEnd(
          prevBoxLength - 1,
          "_"
        );
      boxes.unshift(box.slice(weightLeft ? 1 : 0).join("\n"));
      currentWeight -= currentBoxRepresentation;
      prevBoxLength = box[0].length;
    } else {
      currentBoxRepresentation = Math.floor(currentBoxRepresentation / 2);
    }
  }

  return boxes.join("\n");
}
