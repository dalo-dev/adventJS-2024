# Challenge #4: 🎄 Decorating the Christmas tree

## 🧠 Problem instructions

It's time to put up the Christmas tree at home! 🎄 But this year we want it to be special. We're going to create a function that receives the height of the tree (a positive integer between 1 and 100) and a special character to decorate it.

The function should return a string that represents the Christmas tree, constructed as follows:

- The tree is made up of triangles of special characters.
- The spaces on the sides of the tree are represented with underscores \_.
- All trees have a trunk of two lines, represented by the # character.
- The tree should always have the same length on each side.
- You must ensure the tree has the correct shape using line breaks \n for each line.

Examples:

```javascript
const tree = createXmasTree(5, "*");
console.log(tree);
/*
____*____
___***___
__*****__
_*******_
*********
____#____
____#____
*/

const tree2 = createXmasTree(3, "+");
console.log(tree2);
/*
__+__
_+++_
+++++
__#__
__#__
*/

const tree3 = createXmasTree(6, "@");
console.log(tree3);
/*
_____@_____
____@@@____
___@@@@@___
__@@@@@@@__
_@@@@@@@@@_
@@@@@@@@@@@
_____#_____
_____#_____
*/
```

## 💡 Approach and Solution

To solve this problem, I used the following approach:

1. **Calculate Maximum Tree Width**:

   - The width of the tree is determined by the height. For a tree of height `h`, the width is `2 * h - 1`.
   - This ensures that the tree is symmetrical and centered.

2. **Build the Upper Part**:

   - For each row in the tree, I calculated the number of ornaments needed (`2 * i - 1` for the `i`th row).
   - The remaining width on each side is filled with underscores (`_`).
   - I used the `repeat()` method to generate the ornaments and padding dynamically for each row.

3. **Build the Lower Part (Trunk)**:

   - The trunk consists of two rows, each with a single `#` in the center.
   - The trunk is padded with underscores to center it, similar to the rows in the upper part.

4. **Combine and Return the Tree**:
   - Finally, I combined the upper part and the trunk using the `join("\n")` method to form a complete tree.

## 🎉 What I Learned

- How to dynamically calculate and manage widths for symmetrical patterns.
- The power of string manipulation in JavaScript, particularly using `repeat()` for repetitive characters and dynamic padding.
- Efficiently combining different parts of a visual representation (tree and trunk) using array operations.
