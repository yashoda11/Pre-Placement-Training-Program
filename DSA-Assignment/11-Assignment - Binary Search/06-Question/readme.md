# **Assignment Questions - 11**

## **Question - 06**
Suppose an array of length `n` sorted in ascending order is **rotated** between `1` and `n` times. 
- For example, the array `nums = [0,1,2,4,5,6,7]` might become:
    - `[4,5,6,7,0,1,2]` if it was rotated `4` times.
    - `[0,1,2,4,5,6,7]` if it was rotated `7` times.
- Notice that **rotating** an array `[a[0], a[1], a[2], ..., a[n-1]]` 1 time results in the array `[a[n-1], a[0], a[1], a[2], ..., a[n-2]]`.
- Given the sorted rotated array `nums` of **unique** elements, return *the minimum element of this array*.
- You must write an algorithm that runs in `O(log n) time.`

**Example - 01:**
```
Input: nums = [3,4,5,1,2]
Output: 1
Explanation: The original array was [1,2,3,4,5] rotated 3 times.
```

**Example - 02:**
```
Input: nums = [4,5,6,7,0,1,2]
Output: 0
Explanation: The original array was [0,1,2,4,5,6,7] and it was rotated 4 times.
```

**Example - 03:**
```
Input: nums = [11,13,15,17]
Output: 11
Explanation: The original array was [11,13,15,17] and it was rotated 4 times.
```

**Explanatio :**
- To find the minimum element in a rotated sorted array nums of unique elements with a time complexity of O(log n), we can use a modified binary search algorithm.
- The idea behind the algorithm is to compare the middle element of the array with the first and last elements to determine the rotation point. 
- If the middle element is smaller than the last element, the rotation point is in the first half of the array. Otherwise, it is in the second half of the array.
- The findMin function returns the minimum element in the rotated sorted array nums using a modified binary search algorithm.