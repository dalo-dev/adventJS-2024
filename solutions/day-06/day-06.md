# Challenge #6: 📦 Is the gift inside the box?

## 🧠 Problem instructions

We have already wrapped hundreds of presents 🎁… but an elf forgot to check if the present, represented by an asterisk \*, is inside the box.

The box has a present (\*) and counts as "inside the box" if:

It is completely surrounded by # on the box's edges.
The _ is not on the box's edges.
Keep in mind that the _ can be inside, outside, or may not even be there. We must return true if the \* is inside the box and false otherwise.

Examples:

```javascript
inBox(["###", "#*#", "###"]); // ➞ true

inBox(["####", "#* #", "#  #", "####"]); // ➞ true

inBox(["#####", "#   #", "#  #*", "#####"]); // ➞ false

inBox(["#####", "#   #", "#   #", "#   #", "#####"]); // ➞ false
```

## 💡 Approach and Solution

To solve this problem, I used the following approach:

1. **Iterate Over Inner Rows**:

   - The first and last rows of the box represent the top and bottom borders, so I skipped them.
   - I iterated over the remaining rows (from index `1` to `box.length - 2`).

2. **Check for Gift Presence**:

   - For each row, I used `includes("*")` to check if the gift is present.

3. **Validate Gift Position**:

   - If the gift is found, I ensured that it is not touching the left or right border of the row. This is done using `startsWith("*")` and `endsWith("*")`.
   - If the gift touches a border, the function immediately returns `false`.

4. **Return the Result**:
   - If the gift is found and is not touching any border, the function returns `true`.
   - If no gift is found after checking all inner rows, the function returns `false`.

## 🎉 What I Learned

- How to efficiently handle boundary conditions in a grid-like structure.
- The usefulness of string methods like includes() and startsWith() for analyzing patterns in strings.
- Implementing a logical check for multi-line conditions in an array of strings.
