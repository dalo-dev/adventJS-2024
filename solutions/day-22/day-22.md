# Challenge #22: 🎁 Generate gift combinations

## 🧠 Problem instructions

Santa Claus 🎅 is checking a **list of unique toys that he might include in his magic gift bag.** He wants to explore all possible combinations of toys. He wants to see all combinations that actually contain at least one toy.

Your task is to write a function that, given an array of toys, **returns all possible combinations.**

**Important:** You must return it in the order the toys appear and in combinations from 1 to n toys.

```javascript
generateGiftSets(["car", "doll", "puzzle"]);
// [
//   ['car'],
//   ['doll'],
//   ['puzzle'],
//   ['car', 'doll'],
//   ['car', 'puzzle'],
//   ['doll', 'puzzle'],
//   ['car', 'doll', 'puzzle']
// ]

generateGiftSets(["ball"]);
// [
//   ['ball']
// ]

generateGiftSets(["game", "pc"]);
// [
//   ['game'],
//   ['pc'],
//   ['game', 'pc']
// ]
```

## 💡 Approach and Solution

The `generateGiftSets` function uses backtracking to generate all possible combinations of gifts. Backtracking is a systematic way to explore all possible solutions by incrementally building candidates and abandoning them as soon as they're determined to be invalid.

### Approach

1. **Backtracking Function**:

   - Create a recursive function that takes the current index and the current set of gifts.
   - For each gift, we have two choices: include it or exclude it.

2. **Decision Tree**:

   - For each gift at the current index, we explore both possibilities:
     - Include the gift in the current set
     - Exclude the gift from the current set

3. **Base Case**:

   - When we've processed all gifts (reached the end of the array), we add the current set to our results.

4. **Result Sorting**:
   - Sort all combinations by length to meet the requirement.

### What I Have Learned

- **Backtracking Algorithm**:

  - Using recursion to explore all possible combinations
  - Making a choice, exploring its consequences, then undoing the choice to explore alternatives

- **Decision Trees**:

  - Visualizing the problem as a binary decision tree where each node represents a choice

- **Array Manipulation**:

  - Using push/pop operations to efficiently build and modify combinations
  - Creating deep copies of arrays using the spread operator to avoid reference issues

- **Time and Space Complexity**:
  - Understanding that generating all subsets has a time complexity of O(2^n)
  - Managing space complexity by reusing the same array for backtracking
