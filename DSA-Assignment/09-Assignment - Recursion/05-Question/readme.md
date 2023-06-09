# **Assignment Questions - 09**

## **Question - 05**

Given an array of integers **arr**, the task is to find maximum element of that array using recursion.

**Example 1:**

Input: arr = {1, 4, 3, -5, -4, 8, 6};
Output: 8

**Example 2:**

Input: arr = {1, 4, 45, 6, 10, -8};
Output: 45

**Explanation :**
- To find the maximum element of an array arr using recursion, we can define a recursive function that compares elements of the array and returns the maximum value. 
- The base case occurs when the array has only one element, in which case that element is the maximum.
- In this code, the findMax function takes an array arr as input and recursively finds the maximum element.
- First, it checks if the length of the array is 1. If it is, it returns the single element as the maximum.
- If the array has more than one element, it finds the midpoint mid of the array and recursively calls the findMax function on the left half (arr.slice(0, mid)) and the right half (arr.slice(mid)). It stores the maximum values returned from the recursive calls in leftMax and rightMax.
- Finally, it compares leftMax and rightMax using Math.max to determine the maximum element among the two halves, and returns the result.
In the example usage, the code finds the maximum element of the given arrays [1, 4, 3, -5, -4, 8, 6] and [1, 4, 45, 6, 10, -8]. The outputs are 8 and 45, respectively.