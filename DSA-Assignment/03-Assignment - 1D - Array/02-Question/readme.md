# Assignment - 03
## **Question 2**
- Given an array nums of n integers, return an array of all the unique quadruplets
[nums[a], nums[b], nums[c], nums[d]] such that:
    1. 0 <= a, b, c, d < n.
    2. a, b, c, and d are distinct.
    3. nums[a] + nums[b] + nums[c] + nums[d] == target.
- You may return the answer in any order.

**Example 1:**

**Input:** nums = [1,0,-1,0,-2,2], target = 0

**Output:** [ [-2,-1,1,2], [-2,0,0,2], [-1,0,0,1] ]

**Approach**
- The steps can be as follows —
    1. Sort the array in time O(n * log n).
    2. Now for each element i and j, do the following steps — 
    3. Set two pointers left — k = j + 1 and right — l = n - 1.
    4. Check if nums[i] + nums[j] + nums[k] + nums[l] == target and add it to the result, if true/
    5. If nums[i] + nums[j] + nums[k] + nums[l] < target, then we are too left, and we need to move right so increment left pointer i.e. k++.
    6. If nums[i] + nums[j] + nums[k] + nums[l] > target, then we are too right, and we need to decrement the right pointer i.e., l--.

**Time Complexity**

- We are scanning the entire array keeping one element fixed and then doing it for another element fixed. 
- We are doing this for every element in the array. Thus, we are scanning each element of array n number of times. 
- And we are doing this for n times, hence the worst case time complexity will be O(n3 + n * log n) which comes down to O(n3).

**Space Complexity**
- We are not using any data structure for the intermediate computations, hence the space complexity is O(1). 