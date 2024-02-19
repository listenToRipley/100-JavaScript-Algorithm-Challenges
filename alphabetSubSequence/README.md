

---
Check whether the given string is a subsequence of the plaintext alphabet.

**Explain**

The each letter provide, should have a higher index then the letter before.
1. Create an alphabet reference.
2. Convert the letters to an array.
3. Go through the array 
4. If the value of the next letter came before the last letter or is the same letter, return false
5. Else if the next letter comes after the previous letter, then return true unless the first condition is met.
6. If you each the end and all letter are in order, return true.


**Example**

- For s = "effg" or s = "cdce", the output should be
alphabetSubsequence(s) = false

- For s = "ace" or s = "bxz", the output should be
alphabetSubsequence(s) = true.

**Hints**
-   size property
-   charCodeAt()
-   split()

**Input/Output**

- **[execution time limit] 5 seconds (ts)**
- **[input] string s**

*Guaranteed constraints:*

2 ≤ s.length ≤ 15.

**[output] boolean**

true if the given string is a subsequence of the alphabet, false otherwise.
