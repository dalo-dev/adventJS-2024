function minMovesToStables(reindeer, stables) {
  const sortedReindeers = reindeer.sort((a, b) => a - b);
  const sortedStables = stables.sort((a, b) => a - b);
  let sum = 0;

  for (let i = 0; i < reindeer.length; i++) {
    sum += Math.abs(sortedStables[i] - sortedReindeers[i]);
  }

  return sum;
}
