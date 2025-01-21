# Challenge #24: 🪞 Check if trees are magical mirrors

## 🧠 Problem instructions

At the North Pole, the elves have **two magical binary trees that generate energy 🌲🌲** to keep the Christmas star ⭐️ shining. However, for them to work properly, the trees must be in perfect sync **like mirrors 🪞**.

**Two binary trees are mirrors if:**

- The roots of both trees have the same value.
- Each node of the first tree must have its corresponding node in the opposite position in the second tree.

And the tree is represented with three properties `value`, `left`, and `right`. The latter two display the remaining branches (if any):

```javascript
const tree = {
  value: "⭐️",
  left: {
    value: "🎅",
    // left: {...}
    // right: { ... }
  },
  right: {
    value: "🎁",
    // left: { ... }
    // right: { ...&nbsp;}
  },
};
```

Santa needs your help to verify if the trees are synchronized so that the star can keep shining. **You must return an array** where the **first position indicates if the trees are synchronized** and the **second position returns the value of the root of the first tree.**

```javascript
const tree1 = {
  value: '🎄',
  left: { value: '⭐' },
  right: { value: '🎅' }
}

const tree2 = {
  value: '🎄',
  left: { value: '🎅' }
  right: { value: '⭐' },
}

isTreesSynchronized(tree1, tree2) // [true, '🎄']

/*
  tree1          tree2
   🎄              🎄
  / \             / \
⭐   🎅         🎅   ⭐
*/

const tree3 = {
  value: '🎄',
  left: { value: '🎅' },
  right: { value: '🎁' }
}

isTreesSynchronized(tree1, tree3) // [false, '🎄']

const tree4 = {
  value: '🎄',
  left: { value: '⭐' },
  right: { value: '🎅' }
}

isTreesSynchronized(tree1, tree4) // [false, '🎄']

isTreesSynchronized(
  { value: '🎅' },
  { value: '🧑‍🎄' }
) // [false, '🎅']
```

## 💡 Approach and Solution

The `isTreesSynchronized` function determines if two binary trees, `tree1` and `tree2`, are synchronized (mirrored). Synchronization is defined as having the same structure and mirrored values across both trees.

### Approach

1. **Base Case**:

   - If both nodes (`tree1` and `tree2`) are null or undefined, they are considered synchronized. Return `[true]`.

2. **Recursive Traversal**:

   - Recursively check:
     - The left subtree of `tree1` against the right subtree of `tree2`.
     - The right subtree of `tree1` against the left subtree of `tree2`.

3. **Combine Results**:

   - Synchronization is confirmed if:
     - The results from both recursive checks (`branch1` and `branch2`) are `true`.
     - The values of the current nodes in `tree1` and `tree2` match.

4. **Return Results**:
   - Return an array containing:
     - A boolean indicating synchronization status.
     - The value of the current node in `tree1`.

### What I’ve Learned

- **Recursive Tree Traversal**:
  - Recursion is a powerful method to process tree structures efficiently, allowing for straightforward mirroring comparisons.
- **Short-Circuit Evaluation**:
  - Logical operators help optimize checks by immediately exiting when conditions are not met.
- **Edge Case Handling**:
  - It’s essential to account for scenarios where either tree might have missing nodes to avoid errors or incorrect results.
