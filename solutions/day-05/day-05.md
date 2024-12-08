# Challenge #5: 👞 Shoe pairing

## 🧠 Problem instructions

Santa Claus's elves 🧝🧝‍♂️ have found a bunch of mismatched magic boots in the workshop. Each boot is described by two values:

type indicates if it's a left boot (I) or a right boot (R).
size indicates the size of the boot.
Your task is to help the elves pair all the boots of the same size having a left and a right one. To do this, you should return a list of the available boots after pairing them.

Note: You can have more than one pair of boots of the same size!

```javascript
const shoes = [
  { type: "I", size: 38 },
  { type: "R", size: 38 },
  { type: "R", size: 42 },
  { type: "I", size: 41 },
  { type: "I", size: 42 },
];

organizeShoes(shoes);
// [38, 42]

const shoes2 = [
  { type: "I", size: 38 },
  { type: "R", size: 38 },
  { type: "I", size: 38 },
  { type: "I", size: 38 },
  { type: "R", size: 38 },
];
// [38, 38]

const shoes3 = [
  { type: "I", size: 38 },
  { type: "R", size: 36 },
  { type: "R", size: 42 },
  { type: "I", size: 41 },
  { type: "I", size: 43 },
];

organizeShoes(shoes3);
// []
```

## 💡 Approach and Solution

To solve this problem, I used the following approach:

1. **Group Shoes by Type**:

   - I used the `reduce()` method to iterate over the list of shoes and group them by their type (`I` for left boots, `R` for right boots).
   - The result is an object `sizes` with two arrays: one for left boots (`sizes.I`) and one for right boots (`sizes.R`).

2. **Separate Left and Right Boots**:

   - The left boots are stored in `leftBoots` as is (`sizes.I`).
   - The right boots are copied into a new array (`rightBoots`) using the spread operator to avoid mutating the original array.

3. **Match Left and Right Boots**:

   - I used the `filter()` method to iterate through `leftBoots` and check if there’s a matching size in `rightBoots`.
   - If a match is found, the size is removed from `rightBoots` (using `splice()`), and the size is kept in the result.

4. **Return the Pairs**:
   - The resulting array contains the sizes of all matched pairs.

## 🎉 What I Learned

- How to group and organize data using `reduce()` with a predefined object structure.
- The importance of immutability when working with input data, and how to handle mutable operations like `splice()` without affecting the original data.
- Efficient techniques for pairing items from two related arrays.
