# **Assignment - 05** 
## **Question 2**

You have n coins and you want to build a staircase with these coins. 
- The staircase consists of k rows where the ith row has exactly i coins. 
- The last row of the staircase **may be** incomplete.
- Given the integer n, return *the number of **complete rows** of the staircase you will build*.

**Example :**

**Input:** n = 5

**Output:** 2

**Explanation:** 
- Because the 3rd row is incomplete, we return 2.
- In the given example, we calculate the number of complete rows for n = 5. 
- The output is 2 since the largest k such that (k * (k + 1)) / 2 <= 5 is 2. 
- The last row is incomplete because there are only 5 coins available.
- The code iterates over the rows starting from the first row (with i = 1) and keeps track of the number of coins (coins) allocated for each row. 
- It increments the completeRows count as long as the number of coins plus the coins in the current row (i) is less than or equal to n. 
- Finally, it returns the count of complete rows.

