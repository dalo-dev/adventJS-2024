function prepareGifts(gifts) {
  const noDuplicateGifs = [...new Set(gifts)];
  return noDuplicateGifs.sort((a, b) => a - b);
}
