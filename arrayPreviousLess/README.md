

##### Algorithm Challenge Available At [CodeFights](https://codefights.com/arcade/code-arcade/spring-of-integration/MQg7s3dKrP4caN42A)
---
Given array of integers, for each position i, search among the previous positions for the last (from the left) position that contains a smaller value. Store this value at position i in the answer. If no such value can be found, store -1 instead.

**Example**

For items = [3, 5, 2, 4, 5], the output should be
arrayPreviousLess(items) = [-1, 3, -1, 2, 4].

**Explain**

1. Loop backwards through the array.
2. Compare the next value to the current value.
3. If the current value is less than the current value, replace the current value with the value. 
4. If there is not value replace it with a -1 
5. If the next value is greater than the current value, replace it with a -1.
6. Return the results of the array.

**Hints**
-   unshift()

**Input/Output**

- **[execution time limit] 5 seconds (ts)**
- **[input] array.integer items**

    Non-empty array of positive integers.

*Guaranteed constraints:*

3 ≤ items.length ≤ 15,

1 ≤ items[i] ≤ 200.

- **[output] array.integer**

    Array containing answer values computed as described above.