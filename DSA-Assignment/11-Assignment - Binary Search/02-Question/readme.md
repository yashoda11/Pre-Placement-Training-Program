# **Assignment Questions - 11**

## **Question - 02**

A peak element is an element that is strictly greater than its neighbors.
- Given a **0-indexed** integer array `nums`, find a peak element, and return its index. If the array contains multiple peaks, return the index to **any of the peaks**.
- You may imagine that `nums[-1] = nums[n] = -∞`. In other words, an element is always considered to be strictly greater than a neighbor that is outside the array.
- You must write an algorithm that runs in `O(log n)` time.

**Example - 01:**

```
Input: nums = [1,2,3,1]
Output: 2
Explanation: 3 is a peak element and your function should return the index number 2.
```

**Example - 02:**

```
Input: nums = [1,2,1,3,5,6,4]
Output: 5
Explanation: Your function can return either index number 1 where the peak element is 2, or index number 5 where the peak element is 6.
```

**Explanation :**
- To find a peak element in a given integer array nums, we can use the binary search algorithm. 
**Algorithm :**
- Here's the step-by-step approach to solving this problem:
    1. Initialize two pointers, left and right, with the range of indices (0 to nums.length - 1).
    2. While left is less than or equal to right, do the following:
        - Calculate the middle index mid as the average of left and right.
        - If nums[mid] is less than nums[mid + 1], update left to mid + 1.
        - Otherwise, update right to mid.
    3. After the while loop, left will be the index of a peak element. Return left as the index of the peak element.
- The output for the given examples:
     - The function returns the index of a peak element in the array. 
     - Note that there can be multiple peak elements, and the function can return the index of any of the peaks.




