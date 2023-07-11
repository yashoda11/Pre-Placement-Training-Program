# **Assignment Questions - 24**
## **Question - 05**
## **Ugly Numbers :**

An **ugly number** is a positive integer whose prime factors are limited to `2`, `3`, and `5`.
- Given an integer `n`, return *the* `nth` ***ugly number***.

**Example - 01 :**
```
Input : n = 10
Output : 12
Explanation : 
[1, 2, 3, 4, 5, 6, 8, 9, 10, 12] is the sequence of the first 10 ugly numbers.
```

**Example - 02 :**
```
Input : n = 1
Output : 1
Explanation : 
1 has no prime factors, therefore all of its prime factors are limited to 2, 3, and 5.
```

**Constraints :**
- 1 <= n <= 1690.

**Explanation :**
- The code uses a dynamic programming approach to generate the nth ugly number. 
- It maintains an array uglyNumbers to store the ugly numbers in ascending order.
- The code uses three pointers p2, p3, and p5, which represent the indices in the uglyNumbers array for the numbers that will be multiplied by 2, 3, and 5 respectively to generate the next ugly number.
- The algorithm iterates from 1 to n - 1 and at each iteration, it calculates the next ugly number as the minimum among uglyNumbers[p2] * 2, uglyNumbers[p3] * 3, and uglyNumbers[p5] * 5. 
- The smallest of these three numbers is added to the uglyNumbers array.
- After adding the next ugly number, the pointers p2, p3, and p5 are incremented based on the value of the next ugly number.
- Finally, the code returns the nth ugly number, which is uglyNumbers[n - 1].

**Time Complexity :** 
- The code has a **Time Complexity** of **O(n)** since it iterates n times to generate the nth ugly number.

**Space Complexity :** 
- The **Space Complexity** is **O(n)** since the code uses an array uglyNumbers of size n to store the generated ugly numbers.