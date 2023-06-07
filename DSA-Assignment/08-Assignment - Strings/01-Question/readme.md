# **Assignment Questions - 08**

## **Question - 01**

Given two strings s1 and s2, return *the lowest **ASCII** sum of deleted characters to make two strings equal*.

**Example :**

**Input :** s1 = "sea", s2 = "eat"

**Output :** 231

**Explanation :** 
- Deleting "s" from "sea" adds the ASCII value of "s" (115) to the sum.
- Deleting "t" from "eat" adds 116 to the sum.
- At the end, both strings are equal, and 115 + 116 = 231 is the minimum sum possible to achieve this.
- In this Example, we create a 2D array dp to store the minimum ASCII sum at each step. 
- Then, we iterate through the remaining cells of the dp array. 
- If the characters at the current positions in s1 and s2 are equal, we take the value from the diagonal cell, representing no deletion. 
- Otherwise, we choose the minimum between deleting the character from s1 (add its ASCII value to the previous row) and deleting the character from s2 (add its ASCII value to the previous column).
- Finally, the value in the bottom-right cell of the dp array represents the lowest ASCII sum of deleted characters to make s1 and s2 equal.




