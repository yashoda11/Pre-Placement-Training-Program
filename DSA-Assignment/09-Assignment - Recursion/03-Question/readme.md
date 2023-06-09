# **Assignment Questions - 09**

## **Question - 03**

Given a positive integer, N. Find the factorial of N. 

**Example 1:**

Input: N = 5 

Output: 120

**Example 2:**

Input: N = 4

Output: 24

**Explanation :**
- To find the factorial of a positive integer N , we can define a recursive function that multiplies N with the factorial of N-1. 
- The base case occurs when N is 0 or 1, in which case the factorial is 1.
- In this code, the factorial function takes a positive integer N as input and recursively calculates the factorial of N.
- First, it checks if N is 0 or 1. If it is, it returns 1 since the factorial of 0 or 1 is 1.
- If N is neither 0 nor 1, it recursively calls the factorial function with N-1 and multiplies the result with N.
- The recursion continues until the base case is reached, and the final result is returned.
- In the example usage, the code calculates the factorial of the given numbers 5 and 4. 
- The outputs are 120 and 24, respectively.






