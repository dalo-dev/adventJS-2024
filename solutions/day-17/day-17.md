# Challenge #17: 💣 Grinch's bombs

## 🧠 Problem instructions

The Grinch has been up to his tricks in the North Pole and has planted **explosive coal bombs 💣** in the elves' toy factory. He wants all the toys to be rendered useless, and that's why he has left a grid where some cells have explosive coal (`true`) and others are empty (`false`).

The elves need your help to **map the dangerous areas.** Each empty cell should display a number indicating **how many explosive coal bombs there are in the adjacent positions,** including diagonals.

```javascript
detectBombs([
  [true, false, false],
  [false, true, false],
  [false, false, false],
]);
// [
//   [1, 2, 1],
//   [2, 1, 1],
//   [1, 1, 1]
// ]

detectBombs([
  [true, false],
  [false, false],
]);
// [
//   [0, 1],
//   [1, 1]
// ]

detectBombs([
  [true, true],
  [false, false],
  [true, true],
]);

// [
//   [1, 1],
//   [4, 4],
//   [1, 1]
// ]
```

**Note:** Want a hint? You've surely played the Minesweeper game before… 😉

## 💡 Approach and Solution

The `detectBombs` function computes the number of adjacent bombs for each cell in a 2D grid. This problem is similar to the logic used in the Minesweeper game.

### Approach

1. **Define Directions**:

   - Use an array of relative coordinates `directions` to represent all possible neighbors (top-left, top, top-right, left, right, bottom-left, bottom, bottom-right).

2. **Initialize Result Grid**:

   - Create a result grid of the same size as the input grid, filled initially with `0`. This will store the bomb count for each cell.

3. **Iterate Through Each Cell**:

   - Loop through each row and column of the grid.
   - For each cell, initialize a `bombCount` variable to track the number of adjacent bombs.

4. **Check Neighboring Cells**:

   - For each direction in `directions`, calculate the coordinates of the neighboring cell.
   - Check if the neighboring cell is within bounds and contains a bomb. If so, increment the `bombCount`.

5. **Update Result Grid**:

   - Assign the `bombCount` to the corresponding cell in the result grid.

6. **Return the Result**:

   - Return the completed result grid, where each cell contains the count of adjacent bombs.

## 🎉 What I Learned

- Using relative coordinates simplifies neighbor checks in a 2D grid.
- Boundary checks are crucial to avoid accessing out-of-bounds elements.
- Pre-initializing a result grid is a practical way to store intermediate computations.
