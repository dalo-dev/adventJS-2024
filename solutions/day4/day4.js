function createXmasTree(height, ornament) {
  const maxLength = 2 * height - 1;
  const upperPart = [];
  const lowerPart = Array(2).fill(
    "_".repeat((maxLength - 1) / 2) + "#" + "_".repeat((maxLength - 1) / 2)
  );
  for (let i = 1; i <= height; i++) {
    const treeContent = ornament.repeat(2 * i - 1);
    const restPerSide = "_".repeat((maxLength - treeContent.length) / 2);
    upperPart.push(`${restPerSide}${treeContent}${restPerSide}`);
  }
  return [...upperPart, ...lowerPart].join("\n");
}
