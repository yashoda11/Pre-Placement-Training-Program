# **Assignment - 08**

## **Question - 03**

Given two strings word1 and word2, return *the minimum number of **steps** required to make* word1 *and* word2 *the same*.

In one **step**, you can delete exactly one character in either string.

**Example :**

**Input :** word1 = "sea", word2 = "eat"

**Output :** 2

**Explanation :** 
- You need one step to make "sea" to "ea" and another step to make "eat" to "ea".
- In this code, we create a 2D array dp to store the minimum number of steps at each position. 
- We initialize the first row and column with the cumulative steps required to delete all characters from word1 and word2, respectively.
- Then, we iterate through the remaining cells of the dp array. 
- If the characters at the current positions in word1 and word2 are equal, we take the value from the diagonal cell, representing no deletion. 
- Otherwise, we choose the minimum between deleting a character from word1 (add 1 to the steps of the previous row) and deleting a character from word2 (add 1 to the steps of the previous column).
- Finally, the value in the bottom-right cell of the dp array represents the minimum number of steps required to make word1 and word2 the same.