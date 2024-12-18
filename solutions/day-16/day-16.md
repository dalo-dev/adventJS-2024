# Challenge #16: ❄️ Cleaning the snow path

## 🧠 Problem instructions

The elves are working hard to clear paths filled with magical snow ❄️. This snow has a special property: if **two identical and adjacent** snow piles are found, they **disappear automatically.**

Your task is to write a function to help the elves simulate this process. **The path is represented by a string and each snow pile by a character.**

You need to remove all adjacent snow piles that are the same **until no more moves are possible.**

The result should be the final path after removing all duplicate piles:

```javascript
removeSnow("zxxzoz"); // -> "oz"
// 1. Remove "xx", resulting in "zzoz"
// 2. Remove "zz", resulting in "oz"

removeSnow("abcdd"); // -> "abc"
// 1. Remove "dd", resulting in "abc"

removeSnow("zzz"); // -> "z"
// 1. Remove "zz", resulting in "z"

removeSnow("a"); // -> "a"
// No duplicate piles
```

## 💡 Approach and Solution

The `removeSnow` function removes adjacent pairs of identical characters from a string using a stack-based approach. This method ensures that overlapping pairs are also removed efficiently.

### Approach

1. **Initialize a Stack**:

   - Create an empty array `stack` to hold characters temporarily.

2. **Iterate Through the String**:

   - Traverse each character in the string `s`.

3. **Check for Adjacent Pair**:

   - If the stack is not empty and the top of the stack matches the current character, remove the top character from the stack (`stack.pop()`).
   - Otherwise, add the current character to the stack (`stack.push(char)`).

4. **Rebuild the Result**:

   - After processing the string, the stack contains characters that were not removed in the pair-removal process.
   - Join the characters in the stack to form the resulting string.

5. **Return the Result**:
   - Return the final string formed by the stack.

## 🎉 What I Learned

- Stacks are a powerful data structure for problems involving sequential pairing or nesting.
- By using a stack, we can handle overlapping removals efficiently.
- Ensuring robustness with edge cases (e.g., empty strings or strings with no pairs) is crucial in string manipulation.
