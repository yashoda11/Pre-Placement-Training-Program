# **Assignment - 04**
## **Question 7**
You are given an m x n matrix M initialized with all 0's and an array of operations ops, where ops[i] = [ai, bi] means M[x][y] should be incremented by one for all 0 <= x < ai and 0 <= y < bi.
- Count and return the number of maximum integers in the matrix after performing all the operations.

**Example :**

**Input :** m = 3, n = 3, ops = [[2,2],[3,3]]

**Output :** 4

**Explanation :** 
- The maximum integer in M is 2, and there are four of it in M. So return 4.
- In the given example, we have m = 3, n = 3, and ops = [[2, 2], [3, 3]]. 
- The code iterates over the operations and keeps track of the minimum row count (minRow) and the minimum column count (minCol) encountered. 
- These values represent the dimensions of the resulting submatrix where the maximum integers will be present. - - - Finally, it returns the product of minRow and minCol, which represents the count of maximum integers in the matrix after performing all the operations.
- **Note:** The code uses the Math.min() function to find the minimum values of minRow and minCol.