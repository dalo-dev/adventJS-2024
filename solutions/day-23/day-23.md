# Challenge #23: 🔢 Find the missing numbers

## 🧠 Problem instructions

The elves are working on a system to verify children's gift lists 👧👦. However, some lists are incomplete and **numbers are missing!**

Your task is to write **a function that, given an array of numbers, finds all the numbers that are missing between 1 and n** (where n is the size of the array or the highest number in the array).

Keep in mind that:

- Numbers may appear more than once and others may be missing
- The array always contains positive integers
- Counting always starts from 1

```javascript
findMissingNumbers([1, 2, 4, 6]);
// [3, 5]

findMissingNumbers([4, 8, 7, 2]);
// [1, 3, 5, 6]

findMissingNumbers([3, 2, 1, 1]);
// []

findDisappearedNumbers([5, 5, 5, 3, 3, 2, 1]);
// [4]
```

## 💡 Approach and Solution

The `findMissingNumbers` function identifies numbers missing from a sequence of integers ranging from 1 to the maximum value in the input array.

### Approach

1. **Determine the Range**:

   - Use `Math.max` to find the highest value in the input array `nums`.
   - Generate an array `missingNumbers` containing all integers from 1 to the maximum value using `Array.from`.

2. **Filter Missing Numbers**:

   - Use the `filter` method to exclude numbers that are present in the `nums` array.

3. **Return the Result**:
   - The resulting array contains the numbers that are missing from the sequence.

### What I Have Learned

- **Using `Math.max`**:
  - Quickly determine the maximum value in an array to define the range of numbers.
- **Generating Ranges with `Array.from`**:
  - Create sequences programmatically with specified lengths and values.
- **Filtering Arrays**:
  - Identify elements missing from one array by leveraging `filter` and `includes`.
- **Optimization Considerations**:
  - Efficient handling of sparse arrays by focusing only on relevant ranges.
