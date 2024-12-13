# Challenge #12: 💵 How much does the tree cost?

## 🧠 Problem instructions

You are in a very special market where Christmas trees 🎄 are sold. Each one comes decorated with a series of very peculiar ornaments, and the price of the tree is determined by the ornaments it has.

- `*`: Snowflake - Value: 1
- `o`: Christmas Ball - Value: 5
- `^`: Decorative Tree - Value: 10
- `#`: Shiny Garland - Value: 50
- `@`: Polar Star - Value: 100

Normally, you would sum up all the values of the ornaments and that's it…

But, watch out! **If an ornament is immediately to the left of another of greater value, instead of adding, its value is subtracted.**

```javascript
calculatePrice("***"); // 3   (1 + 1 + 1)
calculatePrice("*o"); // 4   (5 - 1)
calculatePrice("o*"); // 6   (5 + 1)
calculatePrice("*o*"); // 5  (-1 + 5 + 1)
calculatePrice("**o*"); // 6  (1 - 1 + 5 + 1)
calculatePrice("o***"); // 8   (5 + 3)
calculatePrice("*o@"); // 94  (-5 - 1 + 100)
calculatePrice("*#"); // 49  (-1 + 50)
calculatePrice("@@@"); // 300 (100 + 100 + 100)
calculatePrice("#@"); // 50  (-50 + 100)
calculatePrice("#@Z"); // undefined (Z is unknown)
```

## 💡 Approach and Solution

The `calculatePrice` function determines the total price of ornaments based on specific character values, following a logic similar to Roman numeral addition and subtraction rules.

### Approach

1. **Define Ornament Values**:

   - Use an object `ornamentsValues` to map specific characters (`*`, `o`, `^`, `#`, `@`) to their corresponding numeric values.

2. **Split Input String**:

   - Convert the string of ornaments into an array (`ornamentArray`) to iterate over each character.

3. **Initialize Variables**:

   - `prev`: Tracks the value of the previous ornament.
   - `sum`: Accumulates the total price.

4. **Iterate Through Ornaments**:

   - Check if the current ornament exists in `ornamentsValues`. If not, return `undefined`.

   - If the previous value is greater than or equal to the current value, add the current value to `sum`.

   - If the previous value is less than the current value, subtract twice the previous value from the current value and add the result to `sum`. This handles the subtraction logic.

5. **Update `prev`**:

   - Update `prev` to the current ornament's value for the next iteration.

6. **Return the Total**:

   - Return the computed `sum` after processing all ornaments.

## 🎉 What I Learned

- The subtraction logic used here mirrors the one in Roman numeral calculations.
- Using a mapping object (`ornamentsValues`) simplifies character-to-value conversion.
- Validating input ensures robustness and prevents errors in edge cases.
