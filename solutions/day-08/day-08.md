# Challenge #8: 🦌 The reno race

## 🧠 Problem instructions

It's time to select the fastest reindeer for Santa's journeys! 🦌🎄
Santa Claus has organized exciting reindeer races to determine which ones are in the best shape.

Your task is to display each reindeer's progress on a snow track in isometric format.

The information you receive:

- `indices`: An array of integers representing each reindeer's progress on the track:
- `0`: The lane is empty.
- **Positive number**: The reindeer's current position from the beginning of the track.
- **Negative number**: The reindeer's current position from the end of the track.
- `length`: The length of each lane.

Return a string representing the race track:

- Each lane has exactly `length` positions filled with snow (`~`).
- Each reindeer is represented with the letter `r`.
- Lanes are numbered at the end with `/1`, `/2`, etc.
- The view is **isometric**, so the lower lanes are shifted to the right.

Examples:

```javascript
drawRace([0, 5, -3], 10);
/*
  ~~~~~~~~~~ /1
 ~~~~~r~~~~ /2
~~~~~~~r~~ /3
*/

drawRace([2, -1, 0, 5], 8);
/*
   ~~r~~~~~ /1
  ~~~~~~~r /2
 ~~~~~~~~ /3
~~~~~r~~ /4
*/

drawRace([3, 7, -2], 12);
/*
  ~~~r~~~~~~~~ /1
 ~~~~~~~~r~~~ /2
~~~~~~~~~r~~ /3
*/
```

## 💡 Approach and Solution

To solve the problem, I implemented two versions: the initial version and an optimized one.

1. **Create the Track Template**:

   - Start with a string of `~` repeated `length` times to represent the empty track.
   - Convert it into an array (`track`) for easier manipulation.

2. **Place Each Reindeer**:

   - Iterate over the `indices` array. For each reindeer:

     - Create a copy of the empty track (`reinderTrack`).
     - Replace the position at the given index with `r` if the index is valid.

3. **Align Tracks**:

   - Prepend spaces to each track to create a visual alignment. The number of spaces decreases as the reindeer number increases.

4. **Add Reindeer Number**:

   - Append a label (`/1`, `/2`, etc.) to each track line to indicate the reindeer number.

5. **Combine Tracks**:

   - Join all the formatted tracks with newline characters to produce the final result.

## 🎉 What I Learned

Using the `splice()` method was crucial for replacing characters at specific positions in the track.
String manipulation methods like `repeat()`, `split()`, and `join()` simplified creating and formatting the track.
Aligning outputs dynamically improved the visual presentation and readability.
