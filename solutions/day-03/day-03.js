function organizeInventory(inventory) {
  const inventoryObj = {};
  for (let gift of inventory) {
    inventoryObj[gift.category] ??= {};
    inventoryObj[gift.category][gift.name] ??= 0;

    inventoryObj[gift.category][gift.name] += gift.quantity;
  }
  return inventoryObj;
}
