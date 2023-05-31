# **Assignment - 02**

## **Question 7**
An array is monotonic if it is either monotone increasing or monotone decreasing.

- An array nums is monotone increasing if for all i <= j, nums[i] <= nums[j]. An array nums is
monotone decreasing if for all i <= j, nums[i] >= nums[j].
- Given an integer array nums, return true if the given array is monotonic, or false otherwise.

**Example 1:**

**Input:** nums = [1,2,2,3]

**Output:** true

**Explanation :** 
- In the code, we iterate through the array and compare each element with the previous one. 
- If we find any two elements that violate either non-increasing or non-decreasing property, we set the corresponding flag to false. 
- Finally, we return true if either flag is true, indicating that the array is monotonic.




