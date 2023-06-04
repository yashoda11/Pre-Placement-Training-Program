# **Assignment - 06**
## **Question - 02**

You are given an m x n integer matrix matrix with the following two properties:
- Each row is sorted in non-decreasing order.
- The first integer of each row is greater than the last integer of the previous row.
- Given an integer target, return true *if* target *is in* matrix *or* false *otherwise*.
- You must write a solution in O(log(m * n)) time complexity.

**Example :**

**Input :** 
matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3

**Output :** true

**Explanation :**
- To achieve a time complexity of **O(log(m * n))**, we can utilize the properties of the matrix:
    - Each row is sorted in non-decreasing order.
    - The first integer of each row is greater than the last integer of the previous row.
- With these properties, we can treat the matrix as a flattened sorted list and perform a binary search to find the target element. 
- This updated code performs a binary search on the flattened matrix by setting the left and right pointers based on the range of indices. 
- The search continues until the left pointer surpasses the right pointer. 
- The target element is compared with the middle element, and the pointers are adjusted accordingly.
- With this implementation, the output will still be true for the given input matrix and target, and the time complexity is **O(log(m * n))**.