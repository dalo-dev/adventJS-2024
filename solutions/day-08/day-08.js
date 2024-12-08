function drawRace(indices, length) {
  const track = "~".repeat(length).split("");
  const positions = [];

  for (let i = 0; i < indices.length; i++) {
    let reinderTrack = [...track];
    if (indices[i]) {
      reinderTrack.splice(indices[i], 1, "r");
    }
    positions.push(
      `${" ".repeat(indices.length - 1 - i)}${reinderTrack.join("")} /${i + 1}`
    );
  }
  return positions.join("\n");
}
