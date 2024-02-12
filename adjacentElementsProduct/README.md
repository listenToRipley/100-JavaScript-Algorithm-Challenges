

---

Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

1. Loop through the array. 
2. Multiple the current number by the next number in the array.
3. If the value is larger than the last check, then that is your new largest set.
4. If it is not, then go to the next set. 
5. Once you have gone through the whole set, return the results.

**Example**

For inputArray = [3, 6, -2, -5, 7, 3], the output should be
adjacentElementsProduct(inputArray) = 21.

7 and 3 produce the largest product.

**Hints**
-   None

**Input/Output**

- **[time limit] 4000ms (js)**
- **[input] array.integer inputArray**

An array of integers containing at least two elements.

*Guaranteed constraints:*

2 ≤ inputArray.length ≤ 10,
-1000 ≤ inputArray[i] ≤ 1000.

- **[output] integer**

The largest product of adjacent elements.