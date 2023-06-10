# **Assignment - 10**
## **Question - 02**

You have a list `arr` of all integers in the range `[1, n]` sorted in a strictly increasing order. Apply the following algorithm on `arr`:

- Starting from left to right, remove the first number and every other number afterward until you reach the end of the list.
- Repeat the previous step again, but this time from right to left, remove the rightmost number and every other number from the remaining numbers.
- Keep repeating the steps again, alternating left to right and right to left, until a single number remains.

Given the integer `n`, return *the last number that remains in* `arr`.

**Example 1:**

```
Input: n = 9
Output: 6
Explanation:
arr = [1, 2,3, 4,5, 6,7, 8,9]
arr = [2,4, 6,8]
arr = [2, 6]
arr = [6]

```

**Example 2:**
Input: n = 1
Output: 1

**Explanatio :**
- In the recursive version, the function lastRemaining takes in n as the parameter. The base case checks if n is equal to 1, in which case it returns 1 since it represents the last remaining number.
- In the recursive case, the function calculates the value of dp[n] using the same formula as in the dynamic programming approach. It recursively calls lastRemaining with Math.floor(n / 2) to calculate the remaining number at each step.
- Setting n to 9 and calling the lastRemaining function with n as the argument. The result is printed to the console, which should output 6.
- Note that using recursion for this problem may not be the most efficient approach, especially for large values of n, as it involves redundant calculations. The dynamic programming solution is more efficient in this case.