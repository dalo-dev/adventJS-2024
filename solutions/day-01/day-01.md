# Challenge #1: 🎁 First gift repeated!

## 🧠 Problem instructions

Santa Claus 🎅 has received a list of magical numbers representing gifts 🎁, but some of them are duplicated and must be removed to avoid confusion. Additionally, the gifts must be sorted in ascending order before being delivered to the elves.

Your task is to write a function that receives a list of integers (which may include duplicates) and returns a new list without duplicates, sorted in ascending order.

```javascript
const gifts1 = [3, 1, 2, 3, 4, 2, 5];
const preparedGifts1 = prepareGifts(gifts1);
console.log(preparedGifts1); // [1, 2, 3, 4, 5]

const gifts2 = [6, 5, 5, 5, 5];
const preparedGifts2 = prepareGifts(gifts2);
console.log(preparedGifts2); // [5, 6]

const gifts3 = [];
const preparedGifts3 = prepareGifts(gifts3);
console.log(preparedGifts3); // []
// There are no gifts, the list remains empty
```

## 💡 Approach and Solution

To solve this problem, I used the following approach:

1. **Removing Duplicates**:

   - The first step was to remove duplicate gifts from the list. This can be easily achieved using a `Set` in JavaScript, which automatically ensures uniqueness.
   - I wrapped the `Set` in an array (`[...]`) to convert it back to a list.

2. **Sorting the Gifts**:
   - After removing duplicates, the next step was to sort the remaining gifts in ascending order.
   - I used the `sort()` function to sort the array. Since the gifts are numbers, I passed a comparison function to `sort()` (`(a, b) => a - b`) to ensure numerical order.

## 🎉 What I Learned

- I learned how to use Set for removing duplicates from an array in JavaScript, which is a very efficient method.
- Sorting arrays in JavaScript can sometimes be tricky, especially with numbers, since the default sort method compares values as strings. I learned how to implement a comparison function for correct numerical sorting.
