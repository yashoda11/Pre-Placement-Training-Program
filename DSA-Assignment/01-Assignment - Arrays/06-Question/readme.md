# Question - 6

**Q6.** Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

**Example 1:**

**Input:** nums = [1,2,3,1]

**Output:** true

**Explanation:**

- If we sort the array (which will require O(N LogN)), then we can do a linear scan to check the two consecutive elements to find out if there are duplicates. 
- The overall time complexity is improved to O(N LogN) and we are still using the O(1) constant space.
- `Time Complexity is : O(NlogN)`
- `Space Complexity is : O(1)`
- **Input:** nums = [1,2,3,1]
- After Sorting nums will be nums = [1,1,2,3];
- for i = 1;
- nums[1] = 1 and nums[1-1] = nums[0] == 1 both are equal.
- The given array contain a duplicate array numbers. 
- Hence, Return true.
- then return false.