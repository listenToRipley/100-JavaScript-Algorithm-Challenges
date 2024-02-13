

---
Given an array of strings, return another array containing all of its longest strings.

**Explain**

You will need to go through the array to:
1. determine which string has the longest.
2. If the length of the string is longest the the currently longest string, reset the return string and push the new string value into the returning array.
3. If the current string is as long as the longest string, then push it the returning result.

**Example**

For inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be
allLongestStrings(inputArray) = ["aba", "vcd", "aba"].

**Hints**
-   None

**Input/Output**

- **[time limit] 4000ms (js)**
- **[input] array.string inputArray**

A non-empty array.

*Guaranteed constraints:*

1 ≤ inputArray.length ≤ 10,

1 ≤ inputArray[i].length ≤ 10.

- **[output] array.string**

Array of the longest strings, stored in the same order as in the inputArray.