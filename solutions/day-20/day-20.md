# Challenge #20: 🎁 Find missing and duplicate gifts

## 🧠 Problem instructions

**Santa Claus 🎅** is checking the list of gifts he must deliver this Christmas. However, **some gifts are missing, others are duplicated, and some have incorrect quantities.** He needs your help to solve the problem.

You will receive two arrays:

- `received`: List with the gifts Santa currently has.
- `expected`: List with the gifts Santa should have.

Your task is to write a function that, given `received` and `expected`, returns an object with two properties:

- `missing`: An object where the keys are the names of the missing gifts and the values are the quantities that are missing.
- `extra`: An object where the keys are the names of the extra or duplicated gifts and the values are the quantities that are extra.

Keep in mind that:

- Gifts may be repeated in both lists.
- The gift lists are unordered.
- If there are no missing or extra gifts, the corresponding properties (missing or extra) should be empty objects.

```javascript
fixGiftList(
  ["puzzle", "car", "doll", "car"],
  ["car", "puzzle", "doll", "ball"]
);
// Returns:
// {
//   missing: { ball: 1 },
//   extra: { car: 1 }
// }

fixGiftList(
  ["book", "train", "kite", "train"],
  ["train", "book", "kite", "ball", "kite"]
);
// Returns:
// {
//   missing: { ball: 1, kite: 1 },
//   extra: { train: 1 }
// }

fixGiftList(
  ["bear", "bear", "car"],
  ["bear", "car", "puzzle", "bear", "car", "car"]
);
// Returns:
// {
//   missing: { puzzle: 1, car: 2 },
//   extra: {}
// }

fixGiftList(["bear", "bear", "car"], ["car", "bear", "bear"]);
// Returns:
// {
//   missing: {},
//   extra: {}
// }
```

## 💡 Approach and Solution

The `fixGiftList` function identifies discrepancies between two gift lists—`received` and `expected`—and determines the missing and extra items.

### Approach

1. **Initialize Containers**:

   - `diffReceivedExpected`: Tracks differences between received and expected counts for each gift.
   - `results`: Contains the final counts of missing and extra items in two separate objects.

2. **Iterate Through Both Lists**:

   - Traverse both `received` and `expected` arrays up to the length of the longer list.
   - For each gift in `received`, increment its count in `diffReceivedExpected`.
   - For each gift in `expected`, decrement its count in `diffReceivedExpected`.

3. **Analyze Differences**:

   - Iterate through the `diffReceivedExpected` object:
     - If the count is positive, it means there are extra items in the `received` list.
     - If the count is negative, it indicates missing items from the `received` list.

4. **Return Results**:
   - Return the `results` object, which categorizes gifts into `missing` and `extra`.

### What I Have Learned

- **Object Initialization**:
  - Using `??=` to initialize object properties only if they are undefined.
- **Iterating with `for...of` and `Object.entries`**:
  - Simplifies iteration over key-value pairs in objects.
- **Array Processing**:
  - Efficient traversal of arrays and simultaneous comparison.
- **Debugging and Testing**:
  - Importance of handling edge cases like empty lists or repeated items.
