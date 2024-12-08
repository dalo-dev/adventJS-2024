function createFrame(names) {
  const longestWordLength = Math.max(...names.map((name) => name.length));
  const border = "*".repeat(longestWordLength + 4);

  const frame = names.map(
    (name) => `* ${name.padEnd(longestWordLength, " ")} *`
  );

  return [border, ...frame, border].join("\n");
}
