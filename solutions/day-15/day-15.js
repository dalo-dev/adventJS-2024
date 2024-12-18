function drawTable(data) {
  const attributesMaxLength = {};
  for (let i = 0; i < data.length; i++) {
    const headers = Object.keys(data[i]);
    for (let header of headers) {
      attributesMaxLength[header] ??= header.length;
      if (data[i][header].length > attributesMaxLength[header])
        attributesMaxLength[header] = data[i][header].length;
    }
  }

  const headers = Object.keys(attributesMaxLength);

  const borderTable = `+${headers
    .map((header) => "-".repeat(attributesMaxLength[header] + 2))
    .join("+")}+`;

  const headerTable = `|${headers
    .map(
      (header) =>
        ` ${(header[0].toUpperCase() + header.slice(1)).padEnd(
          attributesMaxLength[header]
        )} `
    )
    .join("|")}|`;

  const rowsTable = [];
  for (let i = 0; i < data.length; i++) {
    const headers = Object.keys(data[i]);
    let currentRow = "|";
    for (let header of headers) {
      const value = String(data[i][header]);
      currentRow += ` ${value.padEnd(attributesMaxLength[header], " ")} |`;
    }
    rowsTable.push(currentRow);
  }

  return [
    borderTable,
    headerTable,
    borderTable,
    ...rowsTable,
    borderTable,
  ].join("\n");
}
