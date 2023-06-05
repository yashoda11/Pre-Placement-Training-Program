# **Assignment - 06**
##  **Question 8**

Given two [sparse matrices](https://en.wikipedia.org/wiki/Sparse_matrix) mat1 of size m x k and mat2 of size k x n, return the result of mat1 x mat2. 
- You may assume that multiplication is always possible.

**Example :**

**Input :** mat1 = [[1,0,0],[-1,0,3]], mat2 = [[7,0,0],[0,0,0],[0,0,1]]

**Output :** [[7,0,0],[-7,0,3]]

**Explanation :**
- To multiply two sparse matrices mat1 and mat2, we can use the conventional matrix multiplication algorithm. 
- However, since the matrices are sparse, meaning they contain many zero values, we can optimize the algorithm to improve efficiency.
- Here's the step-by-step process to multiply the two sparse matrices:
    1. Initialize an empty result matrix of size m x n, where m is the number of rows in mat1 and n is the number of columns in mat2.
    2. Iterate over each non-zero element in mat1. Let's say the current element is mat1[i][j] and its value is val.
    3. For the current element, iterate over each non-zero element in the corresponding column in mat2. Let's say the current element in mat2 is mat2[j][k] and its value is mat2_val.
    4. Multiply val with mat2_val and add the result to the corresponding element in the result matrix at position [i][k].
    5. After iterating through all non-zero elements in mat1, the result matrix will be filled with the desired product of mat1 and mat2.
- The code first determines the dimensions of the matrices: m x k for mat1 and k x n for mat2. 
- It then initializes an empty result matrix of size m x n.
- The nested for loop iterates over each non-zero element in mat1. 
- For each non-zero element, it performs another loop to iterate over each non-zero element in the corresponding column of mat2. 
- It multiplies the values and accumulates the result in the corresponding element of the result matrix.
- Finally, it returns the result matrix.
- For the given **input mat1 = [[1, 0, 0], [-1, 0, 3]]** and **mat2 = [[7, 0, 0], [0, 0, 0], [0, 0, 1]]**, the **output** will be **[[7, 0, 0], [-7, 0, 3]]**.





