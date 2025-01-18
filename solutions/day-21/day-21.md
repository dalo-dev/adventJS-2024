# Challenge #21: 🎄 Calculate the height of the Christmas tree

## 🧠 Problem instructions

Santa Claus 🎅 is decorating a magical Christmas tree 🪄, which this year has a special structure in the form of a binary tree. Each node of the tree represents a gift, and Santa wants to know the height of the tree to place the magical star at the top.

Your task is to write a function that calculates the height of a binary tree. The height of a binary tree is defined as the maximum number of levels from the root to a leaf. An empty tree has a height of 0.

```javascript
// Tree definition
const tree = {
  value: "🎁",
  left: {
    value: "🎄",
    left: {
      value: "⭐",
      left: null,
      right: null,
    },
    right: {
      value: "🎅",
      left: null,
      right: null,
    },
  },
  right: {
    value: "❄️",
    left: null,
    right: {
      value: "🦌",
      left: null,
      right: null,
    },
  },
};

// Graphical representation of the tree:
//        🎁
//       /   \
//     🎄     ❄️
//    /  \      \
//  ⭐   🎅      🦌

// Function call
treeHeight(tree);
// Returns: 3
```

## 💡 Approach and Solution

The `treeHeight` function calculates the height of a binary tree recursively, determining the longest path from the root node to a leaf.

### Approach

1. **Base Case**:

   - If the `tree` is `null` or does not have a `value` property, the height is `0`.

2. **Recursive Case**:

   - Compute the height of the left subtree (`leftHeight`) by recursively calling `treeHeight` on `tree.left`.
   - Compute the height of the right subtree (`rightHeight`) by recursively calling `treeHeight` on `tree.right`.

3. **Combine Results**:
   - The height of the tree is the maximum of `leftHeight` and `rightHeight`, plus `1` (to account for the current node).

### What I Have Learned

- **Recursive Functions**:
  - Using recursion to break down problems into smaller subproblems.
  - Understanding and implementing base cases to prevent infinite recursion.
- **Tree Traversal**:
  - Leveraging depth-first traversal (via recursion) to explore all paths of a tree.
- **Math Functions**:
  - Applying `Math.max` to find the maximum value between two numbers.
