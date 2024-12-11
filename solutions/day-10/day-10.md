# Challenge #10: 👩‍💻 The elfish assembler

## 🧠 Problem instructions

The elf programmers are creating **a small magical assembler** to control the machines in Santa Claus's workshop.

To assist them, we will implement a simple interpreter that supports the following magical instructions:

- `MOV x y`: Copies the value `x` (which can be a number or the content of a register) into register `y`
- `INC x`: Increments the content of register `x` by `1`
- `DEC x`: Decrements the content of register `x` by `1`
- `JMP x y`: If the value in register `x` is `0`, then jumps to the instruction at index `y` and continues executing the program from there.

Expected behavior:

- If an attempt is made to access, increment, or decrement a register that has not been initialized, the default value `0` will be used.
- The jump with `JMP` is absolute and goes to the exact index indicated by `y`.
- Upon completion, the program should return the content of register `A`. If A did not have a defined value, it returns undefined.

## 💡 Approach and Solution

The `compile` function processes an array of assembly-like instructions and updates register values dynamically based on the given commands.

### Approach

1. **Define Registers**:

   - Use an object `registers` to store and update values of different registers (e.g., `A`, `B`).

2. **Parse and Execute Instructions**:

   - Iterate through the `instructions` array, splitting each instruction into its components: `command`, `arg1`, and `arg2`.

   - Based on the `command`, perform the corresponding operation:
     - **`MOV`**: Move a value (either a constant or the value of another register) to a specified register. Uninitialized registers default to `0`.
     - **`INC`**: Increment the value of a specified register, initializing it to `0` if necessary.
     - **`DEC`**: Decrement the value of a specified register, initializing it to `0` if necessary.
     - **`JMP`**: Jump to a specified instruction index if the condition is met. Default uninitialized registers to `0` to ensure robustness.

3. **Simplify Parsing Logic**:

   - Use `isNaN()` to differentiate between numeric values and register names, ensuring proper handling of inputs in the `MOV` command.

4. **Optimize Execution Flow**:

   - Default values for uninitialized registers are handled dynamically to avoid redundant checks.
   - Efficient jump handling minimizes unnecessary operations and ensures correct execution flow.

---

### Example

For the input:

```javascript
const instructions = ["MOV 5 A", "INC A", "DEC A", "JMP A 2"];

console.log(compile(instructions));
```

Execution steps:

1. `MOV 5 A`: Sets `A = 5`.
2. `INC A`: Increments `A` to `6`.
3. `DEC A`: Decrements `A` back to `5`.
4. `JMP A 2`: Since `A` is not `0`, the jump is skipped.

Result: `registers.A = 5`.

## 🎉 What I Learned

- Defaulting uninitialized registers to `0` simplifies logic and improves robustness.
- The `isNaN()` function is invaluable for distinguishing between numeric and register arguments.
- Optimizing loops and minimizing redundant operations significantly enhances performance and maintainability.
