# **Assignment Questions - 09**

## **Question - 04**

Given a number N and a power P, the task is to find the exponent of this number raised to the given power, i.e. N^P.

**Example 1 :** 

Input: N = 5, P = 2

Output: 25

**Example 2 :**
Input: N = 2, P = 5

Output: 32

**Explanation :**
- To calculate the exponent of a number N raised to a given power P using recursion, we can define a recursive function that multiplies N with itself P times. 
- The base case occurs when P is 0, in which case the result is 1.
- In this code, the power function takes a number N and a power P as input and recursively calculates N raised to the power P.
- First, it checks if P is 0. If it is, it returns 1 since any number raised to the power 0 is 1.
- If P is not 0, it recursively calls the power function with the same number N and decrements P by 1. It multiplies the result with N in each recursive call.
- The recursion continues until the base case is reached, and the final result is returned.
- In the example usage, the code calculates the exponent of the given numbers 5 raised to the power 2, and 2 raised to the power 5. The outputs are 25 and 32, respectively.






