function decodeFilename(filename) {
  return filename.slice(filename.indexOf("_") + 1, filename.lastIndexOf("."));
}
