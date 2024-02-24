

##### Algorithm Challenge Available At [CodeFights](https://codefights.com/arcade/intro/level-4/xvkRbxYkdHdHNCKjg)
---
You are given an array of integers. On each move you are allowed to increase exactly one of its element by one. Find the minimal number of moves required to obtain a strictly increasing sequence from the input.

**Explain**

1. Look through the array
2. Look at the next value of the array. 
3. If the next value does not increase, then how much would you have to increase it by. 
4. If you don't have to increase it, then move to the next number.
5. Add the total value together for each increase and return it.

**Example**

For inputArray = [1, 1, 1], the output should be
arrayChange(inputArray) = 3.

**Input/Output**

- **[time limit] 4000ms (js)**
- **[input] array.integer inputArray**

*Guaranteed constraints:*

3 ≤ inputArray.length ≤ 105,

-105 ≤ inputArray[i] ≤ 105.

- **[output] integer**

The minimal number of moves needed to obtain a strictly increasing sequence from inputArray.
It's guaranteed that for the given test cases the answer always fits signed 32-bit integer type.