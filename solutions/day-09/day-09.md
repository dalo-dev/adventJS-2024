# Challenge #9: 🚂 The magic train

## 🧠 Problem instructions

The elves are playing with a **magical train 🚂 that carries gifts**. This train moves on a board represented by an **array of strings**.

The train consists of an engine (`@`), followed by its carriages (`o`), and must collect magical fruits (`*`) which serve as fuel. The movement of the train follows these rules:

You will receive two parameters `board` and `mov`.

`board` is an array of strings that represents the board:

- `@` is the train's engine.
- `o` are the train's carriages.
- `*` is a magical fruit
- `·` are empty spaces.

`mov` is a string that indicates the next movement of the train from the train's head `@`:

- `'L'`: left
- `'R'`: right
- `'U'`: up
- `'D'`: down.

With this information, you must return a string:

- `'crash'`: If the train crashes into the edges of the board or itself.
- `'eat'`: If the train collects a magical fruit (\*).
- `'none'`: If it moves without crashing or collecting any magical fruit.

Example:

```javascript
const board = ["·····", "*····", "@····", "o····", "o····"];

console.log(moveTrain(board, "U"));
// ➞ 'eat'
// Because the train moves up and finds a magical fruit

console.log(moveTrain(board, "D"));
// ➞ 'crash'
// The train moves down and the head crashes into itself

console.log(moveTrain(board, "L"));
// ➞ 'crash'
// The train moves to the left and crashes into the wall

console.log(moveTrain(board, "R"));
// ➞ 'none'
// The train moves to the right and there is empty space on the right
```

## 💡 Approach and Solution

To solve the problem of moving the train on a board, I implemented the moveTrain function that determines whether the train eats a fruit, crashes, or moves to an empty space.

1. **Identify Train's Position**:

   - Use `findIndex()` to locate the row (`trainBoard`) containing the train's head (`@`).
   - Use `indexOf()` to find the exact position of the head within the row (`trainPos`).

2. **Calculate the Next Position**:

   - Based on the movement direction (`mov`), calculate the next possible position using a dictionary object `nextPos`.

     - `'U'`: Up — move to the row above, keeping the same column.
     - `'D'`: Down — move to the row below, keeping the same column.
     - `'L'`: Left — move to the same row, one column to the left.
     - `'R'`: Right — move to the same row, one column to the right.

3. **Check for Valid Movement**:

   - Ensure that the new position is within the bounds of the board.
   - Depending on the value at the new position:

     - If it's `*`, the train "eats" (encounters its body).
     - If it's `·`, the train moves to an empty space and continues.
     - If it's any other character (like `@` for the head or `o` for a fruit), it crashes.

4. Return the Result:

   - Return "eat" if the train eats, "none" if it moves to an empty space, or "crash" if it crashes.

## 🎉 What I Learned

- Using `findIndex()` and `indexOf()` helped efficiently locate the train's head and determine its position on the board.
- The dictionary approach for next positions (`nextPos`) provided a clean and readable way to handle movement in different directions.
- Handling the edge cases of the board’s boundaries and different train interactions (eating, crashing, moving) was essential for robustness.
