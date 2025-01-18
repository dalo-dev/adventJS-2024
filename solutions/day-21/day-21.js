function treeHeight(tree) {
  if (!tree?.value) return 0;

  let leftHeight = treeHeight(tree.left);
  let rightHeight = treeHeight(tree.right);

  return Math.max(leftHeight, rightHeight) + 1;
}
