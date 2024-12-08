# Challenge #7: 👹 The Grinch's attack

## 🧠 Problem instructions

The grinch 👹 has passed through Santa Claus's workshop! And what a mess he has made. He has changed the order of some packages, so shipments cannot be made.

Luckily, the elf Pheralb has detected the pattern the grinch followed to jumble them. He has written the rules that we must follow to reorder the packages. The instructions are as follows:

You will receive a string containing letters and parentheses.
Every time you find a pair of parentheses, you need to reverse the content within them.
If there are nested parentheses, solve the innermost ones first.
Return the resulting string with parentheses removed, but with the content correctly reversed.

He left us some examples:

```javascript
fixPackages("a(cb)de");
// ➞ "abcde"
// We reverse "cb" inside the parentheses

fixPackages("a(bc(def)g)h");
// ➞ "agdefcbh"
// 1st we reverse "def" → "fed", then we reverse "bcfedg" → "gdefcb"

fixPackages("abc(def(gh)i)jk");
// ➞ "abcighfedjk"
// 1st we reverse "gh" → "hg", then "defhgi" → "ighfed"

fixPackages("a(b(c))e");
// ➞ "acbe"
// 1st we reverse "c" → "c", then "bc" → "cb"
```

## 💡 Approach and Solution

To solve the problem, I implemented two versions: the initial version and an optimized one.

### **First Version**

This version uses a **stack-based approach** to handle the nested parentheses:

1. **Simulate Nested Parentheses with a Stack**:

   - Traverse the string character by character.
   - When encountering an opening parenthesis `"("`, push its index onto the stack.
   - When encountering a closing parenthesis `")"`, pop the last opening parenthesis index from the stack.

2. **Reverse the Enclosed Content**:

   - Using the indices from the stack, reverse the content inside the parentheses.
   - Replace the original substring with the reversed content and adjust the indices to reflect the updated string.

3. **Repeat for All Parentheses**:

   - Continue this process until all parentheses are resolved.

### **Optimized Version**

This version simplifies the process by using **regular expressions** and recursion:

1. **Identify and Resolve Parentheses with Regex**:

   - Use the regular expression /\(([^()]\*)\)/g to find the innermost parentheses and their content.
   - Replace each matched pair with the reversed content.

2. **Repeat Until All Parentheses Are Resolved**:

   - The while loop ensures that the process continues until no parentheses remain in the string.

3. **Return the Final String**:

   - Once all parentheses are resolved, return the resulting string.

## 🎉 What I Learned

- **Stack-Based Algorithms**: This approach is effective for handling nested structures like parentheses.
- **Regular Expressions for String Manipulation**: Using regex made the optimized version much shorter and easier to read.
- **Efficiency Considerations**: The first version uses a stack for precise control, but the optimized version leverages built-in functions for simplicity and performance.
