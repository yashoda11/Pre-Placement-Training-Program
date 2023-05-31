# **Assignment - 03**

## **Question 1**
Given an integer array nums of length n and an integer target, find three integers
in nums such that the sum is closest to the target.
Return the sum of the three integers.
- You may assume that each input would have exactly one solution.

**Example 1:**

**Input:** nums = [-1,2,1,-4], target = 1

**Output:** 2

**Explanation :** 
- The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).

**Approach :**

- Sort the array (in time O(n * log(n))).
- Now for each element i, do the following steps
Set two pointers left — j = i + 1 and right — k = nums.length - 1.
- Check if nums[i] + nums[j] + nums[k] <= target, it means we are too left in the array, and we need to move right i.e., we can check for greater number than the current one.
- If the sum nums[i] + nums[j] + nums[k] > target, it means we are too right in the array, and we need to move left i.e., we can check for smaller number than the current one.
- Compare the minimum difference between the current sum and the previous sum. 
- The sum which give minimum difference is the answer.

**Time Complexity :**
- We are scanning the entire array keeping one element fixed. 
- We are doing this for every element in the array. Thus, we are scanning each element of array n number of times. 
- And we are doing this for n times, hence the worst case time complexity will be O(n2 + n * log n) which comes down to O(n2).

**Space Complexity**
- We are not using any data structure for the intermediate computations, hence the space complexity is O(1).



