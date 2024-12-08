# Challenge #2: 🖼️ Framing names

## 🧠 Problem instructions

Santa Claus 🎅 wants to frame the names of the good children to decorate his workshop 🖼️, but the frame must follow specific rules. Your task is to help the elves generate this magical frame.

Rules:

- Given an array of names, you must create a rectangular frame that contains all of them.
- Each name must be on a line, aligned to the left.
- The frame is built with \* and has a border one line thick.
- The width of the frame automatically adapts to the longest name plus a margin of 1 space on each side.

Example of how it works:

```javascript
createFrame(['midu', 'madeval', 'educalvolpz'])

// Expected result:
***************
* midu        *
* madeval     *
* educalvolpz *
***************

createFrame(['midu'])

// Expected result:
********
* midu *
********

createFrame(['a', 'bb', 'ccc'])

// Expected result:
*******
* a   *
* bb  *
* ccc *
*******

createFrame(['a', 'bb', 'ccc', 'dddd'])
```

## 💡 Approach and Solution

To solve this problem, I used the following approach:

1. **Finding the Longest Name**:

   - First, I needed to determine the longest name in the list to ensure that the frame is wide enough to fit all the names.
   - I used `map()` to get the length of each name and then applied `Math.max()` to find the longest length.

2. **Creating the Border**:

   - To create the top and bottom border, I used `*`. The length of the border is determined by the longest name plus a little padding for the spaces on either side (4 extra `*` in total).

3. **Padding and Framing the Names**:

   - For each name, I padded it with spaces to match the length of the longest name. I used the `padEnd()` method, which adds spaces to the end of the name until it reaches the desired length.
   - Each name is then surrounded by `*` characters to form the frame.

4. **Combining the Frame**:
   - Finally, I joined the top border, the framed names, and the bottom border with line breaks (`\n`) to create the final string.

## 🎉 What I Learned

- I learned how to dynamically calculate the size of the frame by finding the longest name in the list.
- I also explored how to manipulate strings in JavaScript using padEnd() and how to efficiently join multiple strings with `join("\n")`.
