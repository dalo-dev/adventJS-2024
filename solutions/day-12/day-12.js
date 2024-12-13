function calculatePrice(ornaments) {
  const ornamentsValues = {
    "*": 1,
    o: 5,
    "^": 10,
    "#": 50,
    "@": 100,
  };
  const ornamentArray = ornaments.split("");
  let prev = ornamentsValues[ornamentArray[0]];
  let sum = 0;

  for (let i = 0; i < ornamentArray.length; i++) {
    if (!ornamentsValues[ornamentArray[i]]) return undefined;

    if (prev >= ornamentsValues[ornamentArray[i]])
      sum += ornamentsValues[ornamentArray[i]];
    else {
      sum += ornamentsValues[ornamentArray[i]] - 2 * prev;
    }

    prev = ornamentsValues[ornamentArray[i]];
  }

  return sum;
}

console.log(calculatePrice("o^o*"));
