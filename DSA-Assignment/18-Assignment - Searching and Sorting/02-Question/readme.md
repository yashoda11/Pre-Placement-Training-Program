# **Assignment Questions - 18**
## **Question - 02** 
## **Sort Colors**

Given an array `nums` with `n` objects colored red, white, or blue, sort them **[in-place](https://en.wikipedia.org/wiki/In-place_algorithm)** so that objects of the same color are adjacent, with the colors in the order red, white, and blue.
- We will use the integers `0`, `1`, and `2` to represent the color red, white, and blue, respectively.
- You must solve this problem without using the library's sort function.

**Example - 01 :**
```
Input: nums = [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]
```

**Example - 02 :**
```
Input: nums = [2,0,1]
Output: [0,1,2]
```

**Constraints :**

- `n == nums.length`
- `1 <= n <= 300`
- `nums[i]` is either `0`, `1`, or `2`.

**Explanation :**
1. The sortColors function takes an array of colors as input (nums).
2. We initialize three pointers:
    - **start :** points to the left boundary of the sorted section (representing red color).
    - **end :** points to the right boundary of the sorted section (representing blue color).
    - **current :** is used to iterate through the array.
3. We iterate until current reaches or crosses the right boundary.
4. In each iteration, we check the color of the current element:
    - If it is 0 (red), we swap it with the element at the left boundary (using array destructuring) and move both the left and current pointers one step forward.
    - If it is 2 (blue), we swap it with the element at the right boundary and move the right pointer one step backward. We don't move the current pointer in this case because the swapped element could be 0 or 1, which needs further examination.
    - If it is 1 (white), it is already in the correct position, so we just move the current pointer one step forward.
5. By the end of the iterations, the array will be sorted in-place according to the required color order.