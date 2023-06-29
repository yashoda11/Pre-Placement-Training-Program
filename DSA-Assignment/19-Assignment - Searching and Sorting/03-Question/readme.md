# **Assignment Questions - 19**
## **Question - 01** 
## **Sort an Array**

Given an array of integers `nums`, sort the array in ascending order and return it.
- You must solve the problem **without using any built-in** functions in `O(nlog(n))` time complexity and with the smallest space complexity possible.

**Example - 01 :**
```
Input : nums = [5,2,3,1]
Output : [1,2,3,5]
Explanation : After sorting the array, the positions of some numbers are not changed (for example, 2 and 3), while the positions of other numbers are changed (for example, 1 and 5).
```

**Example - 02 :**
```
Input : nums = [5,1,1,2,0,0]
Output : [0,0,1,1,2,5]
Explanation : Note that the values of nums are not necessairly unique.
```

**Constraints:**
- 1 <= nums.length <= 5 * 10000
- -5 * 104 <= nums[i] <= 5 * 10000


To solve this problem in O(nlog(n)) time complexity and with the smallest space complexity possible, we can use the Merge Sort algorithm.


Explanation:

The mergeSort function takes an array nums as input and recursively divides it into smaller subarrays until each subarray has only one element.
The merge function merges two sorted arrays left and right into a single sorted array.
During the merge process, we compare the elements from the left and right arrays and add them to the merged array in ascending order.
After merging all the subarrays, the sorted array is returned as the result.
The outputs for the given example cases are as follows:

Example 1: For the input [5, 2, 3, 1], the sorted array is [1, 2, 3, 5].
Example 2: For the input [5, 1, 1, 2, 0, 0], the sorted array is [0, 0, 1, 1, 2, 5].
The Merge Sort algorithm has a time complexity of O(nlog(n)) and a space complexity of O(n), which satisfies the requirements of the problem.




