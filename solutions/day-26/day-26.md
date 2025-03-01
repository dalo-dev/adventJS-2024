# Challenge #26: 🎯 Calculate the completed percentage

## 🧠 Problem instructions

Santa Claus has already delivered all the presents! Now he's reviewing the productivity reports of the elves. But there's a problem: \*\*the Product Owner, Mrs. Claus 🧑‍🎄✨\*\*, needs to quickly understand if the elves met the estimated times. They are doing **Agile Scream**.

To help **Mrs. Claus**, your task is to calculate the completed percentage of each task and return it rounded to the nearest whole number. This will allow her to better plan for the next Christmas and keep everyone happy.

This is the function she's expecting:

```javascript
getCompleted("01:00:00", "03:00:00"); // 33%
getCompleted("02:00:00", "04:00:00"); // 50%
getCompleted("01:00:00", "01:00:00"); // 100%
getCompleted("00:10:00", "01:00:00"); // 17%
getCompleted("01:10:10", "03:30:30"); // 33%
getCompleted("03:30:30", "05:50:50"); // 60%
```

## 💡 Approach and Solution

To solve this problem, I implemented the following approach:

1. **Convert Time to Seconds**:

   - First, I created a helper function `timeToSeconds` that converts a time string in the format "HH:MM:SS" to total seconds.
   - This is done by splitting the string by ":", converting each part to a number, and then calculating the total seconds.

2. **Calculate Percentage**:

   - After converting both the worked time and total time to seconds, I calculated the percentage by dividing the worked seconds by the total seconds and multiplying by 100.
   - I used `Math.round()` to round the percentage to the nearest whole number.

3. **Format the Result**:
   - Finally, I returned the result as a string with a percentage sign appended.

## 🎉 What I Learned

- Working with time calculations in JavaScript requires careful handling of different time units.
- Converting times to a common unit (seconds in this case) makes calculations more straightforward.
- The `split()` method combined with `map(Number)` provides a clean way to convert string time components to numbers.
- Using template literals makes it easy to format the final result with the percentage sign.
