# **Assignment - 02**

## **Question 6**
Given an array of integers nums which is sorted in ascending order, and an integer target,
write a function to search target in nums. If target exists, then return its index. Otherwise,
return -1.

- You must write an algorithm with O(log n) runtime complexity.

**Example :**

**Input:** nums = [-1,0,3,5,9,12], target = 9

**Output:** 4

**Explanation:**

- 9 exists in nums and its index is 4.
- Binary search is an efficient algorithm with O(log n) runtime complexity used for finding an item from a sorted list of items. 
- It works by repeatedly dividing the search interval in half.
- Begin with an interval covering the whole array. If the value of the search key is less than the item in the middle of the interval, narrow the interval to the lower half. 
- Otherwise, narrow it to the upper half. Repeatedly check until the value is found or the interval is empty.


