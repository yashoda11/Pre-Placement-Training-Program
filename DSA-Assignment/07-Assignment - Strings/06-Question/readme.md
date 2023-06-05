# **Assignment - 07**
## **Question 6**

Given two strings s and goal, return true *if and only if* s *can become* goal *after some number of **shifts** on* s.
- A **shift** on s consists of moving the leftmost character of s to the rightmost position.
- For example, if s = "abcde", then it will be "bcdea" after one shift.

**Example :**

**Input :** s = "abcde", goal = "cdeab"

**Output :** true

**Explanation :**
- To check if a string s can become goal after some number of shifts, we can concatenate s with itself and check if goal is a substring of the concatenated string.
- Here's the step-by-step process to solve this problem:
- **Algorithm :**
    1. Check if the lengths of s and goal are equal. If not, return false because the strings cannot be equal after any number of shifts.
    2. Concatenate s with itself to create a new string s1.
    3. Check if goal is a substring of s1. If it is, return true; otherwise, return false.
- The code first checks if the lengths of s and goal are equal. 
- If they are not equal, it returns false because the strings cannot be equal after any number of shifts.
- If the lengths are equal, it concatenates s with itself to create a new string s1. 
- Then, it checks if goal is a substring of s1 using the includes method. 
- If goal is a substring, it returns true; otherwise, it returns false.
- For the given input s = "abcde" and goal = "cdeab", the output will be true because goal is a substring of the concatenated string "abcdeabcde".




