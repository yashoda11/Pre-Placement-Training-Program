# **Assignment - 08**

## **Question - 08**

Given two strings s and goal, return true *if you can swap two letters in* s *so the result is equal to* goal*, otherwise, return* false*.*
- Swapping letters is defined as taking two indices i and j (0-indexed) such that i != j and swapping the characters at s[i] and s[j].
- For example, swapping at indices 0 and 2 in "abcd" results in "cbad".

**Example :**

**Input :** s = "ab", goal = "ba"

**Output :** true

**Explanation :** 
- You can swap s[0] = 'a' and s[1] = 'b' to get "ba", which is equal to goal.
- To determine if it's possible to swap two letters in string s to obtain goal, we need to compare the characters at corresponding positions in both strings and check for two scenarios:
    1. The positions where the characters are different in s and goal.
    2. The count of character pairs that are different in s and goal.
- In this code, we handle three cases:
    1. If the lengths of s and goal are different, it's not possible to swap two letters to obtain goal. We return false.
    2. If s and goal are the same, we need to check if s has at least one character that appears more than once. We use a set to count the distinct characters in s and compare it with the length of s. If the count is less than the length, we can swap two occurrences of the same character to obtain goal. We return true in this case.
    3. If s and goal are different, we find the positions where the characters differ and store them in the diffPositions array. If there are exactly two different positions and swapping the characters at those positions in s results in goal, we return true. Otherwise, we return false.
- In the example usage, we check if it's possible to swap two letters in s = "ab" to obtain goal = "ba". 
- Since we can swap the characters at positions 0 and 1 in s to get goal, the output is true.





