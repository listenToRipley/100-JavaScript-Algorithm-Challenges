
#### Algorithm Walkthrough Video
[![IMAGE ALT TEXT HERE](http://img.youtube.com/vi/VGfYf9o3mQo/0.jpg)](http://www.youtube.com/watch?v=VGfYf9o3mQo)
##### Algorithm Challenge Available At [CodeFights](https://codefights.com/arcade/intro/level-5/c1xDc8pp__o)
---
Given an array of integers, find the maximal absolute difference between any two of its adjacent elements.

**Example**

For inputArray = [2, 4, 1, 0], the output should be
arrayMaximalAdjacentDifference(inputArray) = 3.

For inputArray = [2, 9, 1, 0], the output should be
arrayMaximalAdjacentDifference(inputArray) = 8.

**Explain**

1. Loop through the array
2. Subtract the current value from the next value, while there is a next value. 
3. Make sure the result of the subtraction is a absolute value.
4. Create a holder value to compare subtracted values against
5. If the absolute value is higher than the last absolute value, update the holder value.
6. Return the holder value

**Hints**
-   Math.abs()

**Input/Output**

- **[time limit] 4000ms (js)**
- **[input] array.integer inputArray**

*Guaranteed constraints:*

3 ≤ inputArray.length ≤ 10,

-15 ≤ inputArray[i] ≤ 15.

- **[output] integer**

The maximal absolute difference.
