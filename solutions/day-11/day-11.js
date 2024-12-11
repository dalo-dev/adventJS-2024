function decodeFilename(filename) {
  return filename.slice(filename.indexOf("_") + 1, filename.lastIndexOf("."));
}

console.log(decodeFilename("42_chimney_dimensions.pdf.hack2023"));
