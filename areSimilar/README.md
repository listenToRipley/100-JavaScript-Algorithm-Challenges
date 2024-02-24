

##### Algorithm Challenge Available At [CodeFights](https://codefights.com/arcade/intro/level-4/xYXfzQmnhBvEKJwXP)
---
Two arrays are called similar if one can be obtained from another by swapping at most one pair of elements in one of the arrays.

Given two arrays a and b, check whether they are similar.

**Explain**

There are a couple ways you could do this. 
Sum the value of the array and compare it. That would have possible flaw though, since while the values might not be the same, the value could equal the correct value.

Since we are compare the two arrays against each other and we cannot move more than one value, then we will need to track if anything from the second value needs to be moved, while keeping the first array intact for comparison.

We will have to track when an value from the second array is moved.

We will need to create a second array, by which we will show what the new array looks like.

1. Create a short circuit, if one array is longer than the other, we know immediately they cannot be similar.
2. Loop through the first array and compare the values from the second array.
3. If you encounter a value different on the second array, determine if the value in the first array exists in the second array. 
4. If the value doesn't exist, then return false
5. If the value does exist, then increase your move count by 1.
6. If the value ever has to be increased beyond 1, then then return false.
7. If we get the the end and only had to move once, the the values are similar.


**Example**

- For a = [1, 2, 3] and b = [1, 2, 3], the output should be
areSimilar(a, b) = true.

The arrays are equal, no need to swap any elements.

- For a = [1, 2, 3] and b = [2, 1, 3], the output should be
areSimilar(a, b) = true.

We can obtain b from a by swapping 2 and 1 in b.

- For a = [1, 2, 2] and b = [2, 1, 1], the output should be
areSimilar(a, b) = false.

Any swap of any two elements either in a or in b won't make a and b equal.

**Hints**
-   toString()
-   reverse()

**Input/Output**

- **[time limit] 4000ms (js)**
- **[input] array.integer a**

Array of integers.

*Guaranteed constraints:*

3 ≤ a.length ≤ 105,

1 ≤ a[i] ≤ 1000.

- **[input] array.integer b**

Array of integers of the same length as a.

*Guaranteed constraints:*

b.length = a.length,

1 ≤ b[i] ≤ 1000.

**[output] boolean**

true if a and b are similar, false otherwise.