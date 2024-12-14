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

The `moveTrain` function simulates the movement of a train engine (`@`) on a grid-based board and determines the outcome of the move based on the provided direction.

### Approach

1. **Locate the Train Engine**:

   - Find the row (`engineX`) and column (`engineY`) of the train engine (`@`) on the board.

2. **Define Movements**:

   - Create a `moves` object mapping directions (`U`, `R`, `D`, `L`) to coordinate changes (`x`, `y`).

3. **Check Boundary Conditions**:

   - Verify if the move will result in going out of bounds. If the next position is outside the board, return "crash".

4. **Determine the Next Position**:

   - Use the `moves` object to calculate the next position on the board.
   - Check the content of the next position:
     - `*`: Return "eat".
     - `·`: Return "none".
     - Any other value: Return "crash".

5. **Return the Outcome**:

   - Based on the next position's content, return the corresponding result.

## 🎉 What I Learned

- Mapping movements to coordinate changes simplifies navigation logic.
- Validating boundary conditions prevents runtime errors and ensures robustness.
- Simulating grid-based mechanics requires careful handling of indices and edge cases.
