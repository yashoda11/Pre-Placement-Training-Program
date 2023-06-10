# **Assignment - 10**

## **Question 4**

Given a string calculate length of the string using recursion.

**Examples:**
1. Input : str = "abcd"
Output :4

2. Input : str = "GEEKSFORGEEKS"
Output :13

**Explanation :**
- In this code, the calculateLength function takes in a string str as a parameter. The base case is when the string is empty (str === ''), in which case it returns 0.
- In the recursive case, the function removes the first character from the string using str.slice(1) and recursively calls calculateLength on the remaining string. The recursive call counts the length of the remaining string.
- To calculate the length of the original string, we add 1 to the length of the remaining string at each recursive step.
- The example usage demonstrates how to calculate the length of the strings "abcd" and "GEEKSFORGEEKS". The lengths are printed to the console.