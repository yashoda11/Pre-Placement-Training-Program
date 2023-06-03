# **Assignment - 05**
## **Question 1**
**Convert 1D Array Into 2D Array**
- You are given a **0-indexed** 1-dimensional (1D) integer array original, and two integers, m and n. - You are tasked with creating a 2-dimensional (2D) array with  m rows and n columns using **all** the elements from original.
- The elements from indices 0 to n - 1 (**inclusive**) of original should form the first row of the constructed 2D array, the elements from indices n to 2 * n - 1 (**inclusive**) should form the second row of the constructed 2D array, and so on.
- Return *an* m x n *2D array constructed according to the above procedure, or an empty 2D array if it is impossible*.

**Example :**

**Input:** original = [1,2,3,4], m = 2, n = 2

**Output :** [[1,2],[3,4]]

**Explanation:** 
- The constructed 2D array should contain 2 rows and 2 columns.
- The first group of n=2 elements in original, [1,2], becomes the first row in the constructed 2D array.
- The second group of n=2 elements in original, [3,4], becomes the second row in the constructed 2D array.
- To convert a 1D array original into a 2D array with m rows and n columns, we can iterate through the elements of the original array and construct the 2D array row by row. 
- In the given example, we have original = [1, 2, 3, 4], m = 2, and n = 2. The code first checks if the length of the original array is equal to m * n to ensure that there are enough elements to construct the 2D array. If the lengths don't match, it returns an empty array.
- Next, the code initializes an empty result array to store the 2D array and a variable index to keep track of the current index in the original array.
- Then, the code iterates m times to construct each row of the 2D array. Inside the outer loop, it initializes an empty row array for each row.
- Inside the inner loop, the code pushes the elements from the original array into the row array, starting from the current index and incrementing it by 1 in each iteration.
- After completing the inner loop for each row, the code pushes the row array into the result array.
- Finally, the code returns the result array, which represents the constructed 2D array according to the given procedure.
- **Note :** The code assumes that the input values of original, m, and n are valid and satisfy the conditions mentioned in the problem.