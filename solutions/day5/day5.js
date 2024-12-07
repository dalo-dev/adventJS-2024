function organizeShoes(shoes) {
  const sizes = shoes.reduce(
    (acc, shoe) => {
      acc[shoe.type].push(shoe.size);
      return acc;
    },
    { I: [], R: [] }
  );

  const leftBoots = sizes.I;
  const rightBoots = [...sizes.R];

  return leftBoots.filter((size) => {
    const index = rightBoots.indexOf(size);
    if (index !== -1) {
      rightBoots.splice(index, 1);
      return true;
    }
    return false;
  });
}
