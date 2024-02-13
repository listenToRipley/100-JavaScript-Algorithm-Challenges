

---
Given a sequence of integers as an array, determine whether it is possible to obtain a strictly increasing sequence by removing no more than one element from the array.

**Explain**
Two options:

Option 1
1. Make a deep copy of the array.
2. Sort the copy.
3. Compare the values of the array. 
4. The first value that you come to in the comparison, remove that value from both arrays.
5. If you come to more values that that would have to be removed, then return false.
6. If you go through the whole sorted array without issue, then the result is true.

 - alternate you make the counter always increasing, and at the end if it is more than 1 then return false. But seems redundant if we already are going to be evaluating for removals.

Option 2:
1. Loop through the array.
2. Compare the current value with the next value.
3. If the next value is greater than the current value, go the next.
4. If the next value is less than the current value, and no values have currently been removed, remove that value, (skip over).
5. Go to the next value
6. If  the next value is greater, continue, if less than and an item has already been removed, return false.
7. If you go through the whole array and all values are increased, return true.

- - Compare options - -

Both options will need a way to count if you have removed no more than one value from the array.

The complexity is greater with the first option, but it is more robust and will allow faster in some cases. The time complexity is about the same for both.

*Summary*
Decided that option 1 is poor for a number of reason, mostly because we are trying to change the list while we are currently looping through it and it can cause issues.

**Example**

- For sequence = [1, 3, 2, 1], the output should be
almostIncreasingSequence(sequence) = false;

There is no one element in this array that can be removed in order to get a strictly increasing sequence.

- For sequence = [1, 3, 2], the output should be
almostIncreasingSequence(sequence) = true.

You can remove 3 from the array to get the strictly increasing sequence [1, 2]. Alternately, you can remove 2 to get the strictly increasing sequence [1, 3].

**Hints**
-   Nope

**Input/Output**

- **[time limit] 4000ms (js)**
- **[input] array.integer sequence**

*Guaranteed constraints:*

2 ≤ sequence.length ≤ 105,

-105 ≤ sequence[i] ≤ 105.

**[output] boolean**

Return true if it is possible to remove one element from the array in order to get a strictly increasing sequence, otherwise return false.