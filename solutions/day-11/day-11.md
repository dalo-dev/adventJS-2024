# Challenge #11: 🏴‍☠️ Filenames encoded

## 🧠 Problem instructions

**The Grinch has hacked 🏴‍☠️ Santa Claus's workshop systems** and has encoded the names of all the important files. Now the elves can't find the original files and they need your help to decipher the names.

Each file follows this format:

- It starts with a number (can contain any number of digits).
- Then has an underscore `_`.
- Continues with a **file name and its extension**.
- Ends with an extra extension at the end (which we don't need).

Keep in mind that the file names may contain letters (a-z, A-Z), numbers (0-9), **other underscores** (\_), and hyphens (-).

Your task is to implement a function that receives a string with the name of an encoded file and returns only the important part: **the file name and its extension**.

Examples:

```javascript
decodeFilename("2023122512345678_sleighDesign.png.grinchwa");
// ➞ "sleighDesign.png"

decodeFilename("42_chimney_dimensions.pdf.hack2023");
// ➞ "chimney_dimensions.pdf"

decodeFilename("987654321_elf-roster.csv.tempfile");
// ➞ "elf-roster.csv"
```

## 💡 Approach and Solution

The `decodeFilename` function extracts and returns a specific portion of a string (a filename). This is achieved by removing parts of the filename before a `_` and after a `.`.

1. **Understand the Input**:

   - The input is a string representing a filename in a specific format, such as `prefix_someName.extension`.

2. **Find Key Positions**:

   - Locate the position of the first `_` in the filename using `indexOf("_")`.
   - Locate the position of the last `.` in the filename using `lastIndexOf(".")`.

3. **Extract the Desired Portion**:

   - Use `slice()` to extract the substring that starts just after the `_` and ends right before the `.`.
   - This results in the portion of the filename between these two characters.

4. **Return the Result**:

   - Return the extracted substring as the decoded filename.

### Example

For the input:
`decodeFilename("prefix_someName.extension")`

- The function finds the `_` at index 6 and the `.` at index 15.
- It extracts the substring starting at index 7 and ending at index 15 (`"someName"`).

## 🎉 What I Learned

- The `indexOf()` and `lastIndexOf()` methods are effective for pinpointing specific character positions in a string.
- The `slice()` method provides an easy way to extract substrings based on calculated indices.
- This approach ensures flexibility when dealing with filenames of varying lengths and formats.
