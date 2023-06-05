# **Assignment - 06**
## **Question 7**

Given a positive integer n, generate an n x n matrix filled with elements from 1 to n2 in spiral order.

**Example :**

**Input :** n = 3

**Output :** [ [1,2,3],[8,9,4],[7,6,5] ]
**Explanation :**
- To generate an n x n matrix filled with elements from 1 to n^2 in spiral order, we can define four variables to keep track of the boundaries of the matrix: top, bottom, left, and right. 
- We start with the initial values of top = 0, bottom = n - 1, left = 0, and right = n - 1.
- We then initialize the matrix with zeros, and a variable num to keep track of the current number to be filled in the matrix. 
- We iterate in a while loop as long as num is less than or equal to n^2, and in each iteration, we fill the elements in the top row, right column, bottom row, and left column of the matrix, while updating the boundaries accordingly. 
- After each iteration, we increment num by 1.
- The code initializes an empty matrix array of size n x n. 
- It then sets the initial values of num, top, bottom, left, and right. -
- In each iteration of the while loop, it fills the top row, right column, bottom row, and left column of the matrix with the current value of num, incrementing it after each filling operation. 
- Finally, it returns the generated matrix.
- For the given input n = 3, the output will be [[1, 2, 3], [8, 9, 4], [7, 6, 5]], which represents the spiral order filling of elements from 1 to 9 in a 3 x 3 matrix.