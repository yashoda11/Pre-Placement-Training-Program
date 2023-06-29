# **Assignment Questions - 18**
## **Question - 04** 
## **Maximum Gap :**

Given an integer array `nums`, return *the maximum difference between two successive elements in its sorted form*.
- If the array contains less than two elements, return `0`.
- You must write an algorithm that runs in linear time and uses linear extra space.

**Example - 01 :**
```
Input : nums = [3,6,9,1]
Output : 3
Explanation : 
The sorted form of the array is [1,3,6,9], either (3,6) or (6,9) has the maximum difference 3.
```

**Example - 02 :**
```
Input : nums = [10]
Output : 0
Explanation : 
The array contains less than 2 elements, therefore return 0.
```

**Constraints :**
- `1 <= nums.length <= 10^5`
- `0 <= nums[i] <= 10^9`

**Algorithm :**
- To find the maximum difference between two successive elements in a given array nums, we can follow the following steps:
1. Sort the array in ascending order.
2. Initialize a variable maxDifference to keep track of the maximum difference.
3. Iterate through the sorted array and calculate the difference between each pair of successive elements.
4. Update maxDifference if the calculated difference is greater than the current maximum.
5. After iterating through the entire array, return maxDifference.