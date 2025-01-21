function isTreesSynchronized(tree1, tree2) {
  if (!tree1?.value && !tree2?.value) return [true];

  const branch1 = isTreesSynchronized(tree1?.left, tree2?.right);
  const branch2 = isTreesSynchronized(tree1?.right, tree2?.left);

  return [branch1[0] && branch2[0] && tree1.value === tree2.value, tree1.value];
}
