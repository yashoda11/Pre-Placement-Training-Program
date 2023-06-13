# **Assignment Questions - 11**

## **Question - 07**

Given an array of integers `nums` sorted in non-decreasing order, find the starting and ending position of a given `target` value.
- If `target` is not found in the array, return `[-1, -1]`.
- You must write an algorithm with `O(log n)` runtime complexity.

**Example - 01:**
```
Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]
```

**Example - 02:**
```
Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]
```

**Example - 03:**
```
Input: nums = [], target = 0
Output: [-1,-1]
```

**Explanation :**
- To find the starting and ending position of a given target value in an array of integers nums sorted in non-decreasing order in with a time complexity of O(log n), we can use a modified binary search algorithm.
- The idea behind the algorithm is to perform two separate binary searches to find the leftmost and rightmost occurrences of the target value. 
- We can modify the binary search algorithm to search for the target value and keep track of the leftmost and rightmost indices where the target value is found.
- The searchTargetRange function returns the starting and ending position of the target value in the nums array using a modified binary search algorithm.