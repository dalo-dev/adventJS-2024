# Challenge #15: ✏️ Drawing tables

## 🧠 Problem instructions

**ChatGPT has arrived at the North Pole** and the elf _Sam Elfman_ is working on an application for managing gifts and children.

To enhance the presentation, he wants to create a function `drawTable` that receives an array of objects and converts it into a text table.

The drawn table should represent the object data as follows:

- It has a header with the column name.
- The column name has the **first letter capitalized.**
- Each row should contain the values of the objects in the corresponding order.
- Each value must be left-aligned.
- Fields always leave a space on the left.
- Fields leave the necessary space on the right to align the box.

Look at the example to see how you should draw the table:

```javascript
drawTable([
  { name: "Alice", city: "London" },
  { name: "Bob", city: "Paris" },
  { name: "Charlie", city: "New York" },
]);
// +---------+-----------+
// | Name    | City      |
// +---------+-----------+
// | Alice   | London    |
// | Bob     | Paris     |
// | Charlie | New York  |
// +---------+-----------+

drawTable([
  { gift: "Doll", quantity: 10 },
  { gift: "Book", quantity: 5 },
  { gift: "Music CD", quantity: 1 },
]);
// +----------+----------+
// | Gift     | Quantity |
// +----------+----------+
// | Doll     | 10       |
// | Book     | 5        |
// | Music CD | 1        |
// +----------+----------+
```

## 💡 Approach and Solution

The `drawTable` function generates a formatted ASCII table from an array of objects, with each key in the objects becoming a column header.

### Approach

1. **Calculate Maximum Length for Each Attribute**:

   - Create an `attributesMaxLength` object to store the maximum string length for each column header.
   - Iterate through the data to update the maximum lengths based on header names and corresponding values.

2. **Generate Table Borders and Headers**:

   - Create the top and bottom borders of the table using the calculated column widths.
   - Format the headers with padding and capitalize the first letter of each header.

3. **Format Rows**:

   - Iterate through the data array and format each row based on the `attributesMaxLength` values, ensuring proper alignment.

4. **Combine Table Elements**:

   - Concatenate the borders, headers, and rows into a single string using newline characters.

5. **Return the Table**:

   - Return the final formatted table as a string.

## 🎉 What I Learned

- Padding strings dynamically using `padEnd` ensures proper alignment of table cells.
- Maintaining a dictionary for maximum lengths simplifies column width calculation.
