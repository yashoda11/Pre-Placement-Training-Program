# **Assignment Questions - 11**

## **Question - 01**

Given a non-negative integer `x`, return *the square root of* `x` *rounded down to the nearest integer*. The returned integer should be **non-negative** as well.
- You **must not use** any built-in exponent function or operator.
- For example, do not use `pow(x, 0.5)` in c++ or `x ** 0.5` in python.

**Example - 01:**

```
Input: x = 4
Output: 2
Explanation: The square root of 4 is 2, so we return 2.
```

**Example 2:**
```
Input: x = 8
Output: 2
Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.
```

**Explanation :**
- This code uses the binary search algorithm to find the square root. 
- It initializes left and right variables to define the range of possible square root values. 
- It then iteratively updates left and right based on the comparison with the square of the middle value (mid).
- Finally, it returns right as the rounded-down square root.