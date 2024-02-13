

---
Given a string, replace each its character by the next one in the English alphabet (z would be replaced by a).

**Explain**

1. You need to know all the letter of the alphabet, so you need to create an array of these letters.
2. You then need to split your word into an array
3. You will loop through your word array. 
4. Find the index of the letter you are currently on and add on to it, push that index value to a new array.
5. If the value of the array is 25, use index 0.
6. Join the new value array together and return that result.

**Example**

For inputString = "crazy", the output should be
alphabeticShift(inputString) = "dsbaz".

**Hints**

-   split()
-   indexOf()
-   join()

**Input/Output**

- **[time limit] 4000ms (js)**
- **[input] string inputString**

Non-empty string consisting of lowercase English characters.

*Guaranteed constraints:*

1 ≤ inputString.length ≤ 10.

- **[output] string**

The result string after replacing all of its characters.