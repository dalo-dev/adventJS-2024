# Challenge #19: 📦 Stack magical boxes to deliver gifts

## 🧠 Problem instructions

The day to give out gifts is approaching! We need to stack the gifts we will transport on the sleigh 🛷, and for that, **we are going to put them in boxes 📦.**

**The gifts can be placed in 4 different boxes,** where each box can hold weights of 1, 2, 5, and 10, represented as follows:

```javascript
    _
1: |_|
    _____
2: |_____|
    _____
5: |     |
   |_____|

     _________
10: |         |
    |_________|

// JavaScript representation:
const boxRepresentations = {
  1: [" _ ", "|_|"] ,
  2: [" ___ ", "|___|"],
  5: [" _____ ", "|     |", "|_____|"],
  10: [" _________ ", "|         |", "|_________|"]
}
```

Your mission is, upon receiving the weight of the gifts, to **use the fewest boxes possible** and also stack them from less weight (top) to more weight (bottom). **Always aligned to the left.**

Additionally, keep in mind that **when stacking them, the lower edge of the box is reused.**

```javascript
distributeWeight(1);
// Returns:
//  _
// |_|

distributeWeight(2);
// Returns:
//  ___
// |___|

distributeWeight(3);
// Returns:
//  _
// |_|_
// |___|

distributeWeight(4);
// Returns:
//  ___
// |___|
// |___|

distributeWeight(5);
// Returns:
//  _____
// |     |
// |_____|

distributeWeight(6);
// Returns:
//  _
// |_|___
// |     |
// |_____|
```

**Note: Be careful with the white spaces! Do not add whitespace to the right of a box unless necessary.**

## 💡 Approach and Solution

The `distributeWeight` function visualizes the distribution of a given weight using ASCII representations of boxes of various sizes. It ensures that the weight is divided efficiently into the largest possible boxes first.

### Approach

1. **Define Box Representations**:

   - Use an object `boxRepresentations` to map weights (1, 2, 5, 10) to their respective ASCII box designs.

2. **Initialize Variables**:

   - Create an empty array `boxes` to store the ASCII representation of each box.
   - Start with the largest box (`10` units) and the total `weight` to be distributed.
   - Track the previous box length to align the boxes visually.

3. **Distribute the Weight**:

   - Iterate while there is remaining weight (`currentWeight > 0`) and a valid box size (`currentBoxRepresentation !== 0`).
   - For each box size:
     - Check if the current box size can fit within the remaining weight.
     - If yes, add the box representation to the `boxes` array, adjusting the visual alignment if needed.
     - Reduce the remaining weight by the box size.
     - Update the previous box length.
   - If the current box size is too large, move to the next smaller box size.

4. **Combine the Results**:

   - Join the `boxes` array with newlines to form the final output.

5. **Return the Result**:
   - Return the string containing the aligned ASCII representations of the boxes.

### What I Learned

- Using objects for mapping visual representations simplifies the process of associating data with specific values.
- Dynamic adjustments (e.g., aligning box lengths) enhance the output's readability.
- Efficiently reducing weight using the largest possible units first (greedy approach) ensures minimal box usage and clean visualization.
