function inBox(box) {
  for (let i = 1; i < box.length - 1; i++) {
    const currentRow = box[i];

    if (currentRow.includes("*")) {
      if (currentRow.startsWith("*") || currentRow.endsWith("*")) return false;

      return true;
    }
  }

  return false;
}
