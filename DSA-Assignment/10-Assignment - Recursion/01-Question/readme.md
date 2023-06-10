# **Assignment - 10**
## **Question - 01**

Given an integer `n`, return *`true` if it is a power of three. Otherwise, return `false`*.

An integer `n` is a power of three, if there exists an integer `x` such that `n == 3x`.

**Example 1:**

```
Input: n = 27
Output: true
Explanation: 27 = 33
```

**Example 2:**

```
Input: n = 0
Output: false
Explanation: There is no x where 3x = 0.

```

**Example 3:**
```
Input: n = -1
Output: false
Explanation: There is no x where 3x = (-1).
```

**EXplanation :**
- To determine whether an integer n is a power of three, we can use the following approach:
- If n is less than or equal to 0, it cannot be a power of three, so we return false.
- While n is divisible by 3, we keep dividing n by 3.
- After the loop, if n is equal to 1, it means that n was originally a power of three. Otherwise, n is not a power of three.
- In this code, the isPowerOfThree function takes an integer n as input and returns true if n is a power of three, and false otherwise.
- We first check if n is less than or equal to 0. If it is, we return false because n cannot be a power of three in this case.
- Then, we enter a loop while n is divisible by 3. In each iteration, we divide n by 3 to reduce its value.
- After the loop, we check if n is equal to 1. If it is, we return true because it means that n was originally a power of three. Otherwise, we return false.
- In the example usage, we call the isPowerOfThree function with different values of n and log the output to the console. 
- The output matches the expected results based on the examples provided.