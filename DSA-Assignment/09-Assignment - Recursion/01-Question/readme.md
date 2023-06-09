# **Assignment Questions - 09**

## **Question - 01**

Given an integer `n`, return *`true` if it is a power of two. Otherwise, return `false`*.
- An integer `n` is a power of two, if there exists an integer `x` such that `n == 2x`.

**Example 1:**
**Input :** n = 1 

**Output :** true

**Example 2:**
Input: n = 16 

Output: true

**Example 3:**
**Input :** n = 3 

**Output :** false

**Explanation :**
- To determine if an integer n is a power of two, you can use recursion to repeatedly divide n by 2 until it becomes 1 or an odd number. 
- If n becomes 1, it means n was originally a power of two. 
- If n becomes an odd number, it means n was not a power of two.
- In this code, the isPowerOfTwo function takes an integer n as input and recursively checks if n is a power of two.
- First, it checks if n is equal to 1. If it is, it returns true since 1 is a power of two.
- Then, it checks if n is an even number and greater than 1. 
- If it is, it recursively calls the isPowerOfTwo function with n divided by 2.
- If n is not 1 and not an even number, it means n is not a power of two, so it returns false.
- In the example usage, the code checks if the given numbers 1, 16, and 3 are powers of two. 
- The outputs are true, true, and false, respectively.