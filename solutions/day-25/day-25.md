# Challenge #25: 🪄 Execute the magical language

## 🧠 Problem instructions

We have already distributed all the gifts! Back at the workshop, preparations for next year are already beginning.

A genius elf is creating a magical programming language 🪄 that will help streamline the delivery of gifts to children in 2025.

Programs always start with the value `0`, and the language is a string where each character represents an instruction:

- `>` Moves to the next instruction
- `+` Increments the current value by 1
- `-` Decrements the current value by 1
- `[` and `]`: Loop. If the current value is 0, jump to the instruction after `]`. If it is not 0, go back to the instruction after `[`
- `{` and `}`: Conditional. If the current value is 0, jump to the instruction after `}`. If it is not 0, continue to the instruction after `{`

You need to return the value of the program after executing all the instructions.

```javascript
execute("+++"); // 3
execute("+--"); // -1
execute(">+++[-]"); // 0
execute(">>>+{++}"); // 3
execute("+{[-]+}+"); // 2
execute("{+}{+}{+}"); // 0
execute("------[+]++"); // 2
execute("-[++{-}]+{++++}"); // 5
```

## 💡 Approach and Solution

To solve this problem, I implemented a simple interpreter that processes each instruction sequentially while maintaining a result value.

### Approach

1. **Initialize Result**:

   - Start with a result value of 0.

2. **Process Instructions**:

   - Iterate through each character in the code string.
   - For each instruction, perform the corresponding action:
     - `+`: Increment the result by 1.
     - `-`: Decrement the result by 1.
     - `{`: If the result is 0, skip to the matching `}`; otherwise, continue.
     - `]`: If the result is not 0, jump back to the matching `[`; otherwise, continue.
     - Any other character: Ignore and continue.

3. **Handle Control Flow**:

   - For `{` instructions, if the result is 0, use a while loop to find the matching `}` and skip to that position.
   - For `]` instructions, if the result is not 0, use a while loop to find the matching `[` and jump back to that position.

4. **Return Result**:
   - After processing all instructions, return the final value of the result.

## 🎉 What I Learned

- Implementing a simple interpreter requires careful handling of control flow instructions.
- Using a loop with a counter variable allows for non-linear execution flow, which is essential for implementing conditional jumps.
- This type of interpreter is similar to basic versions of languages like Brainfuck, where simple instructions can create complex behavior through their combinations.
