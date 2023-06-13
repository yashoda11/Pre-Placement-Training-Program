# **Assignment Questions - 11**

## **Question - 05**

Given two integer arrays `nums1` and `nums2`, return *an array of their intersection*. Each element in the result must be **unique** and you may return the result in **any order**.

**Example - 01:**
```
Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]

```
**Example - 02:**
```
Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [9,4]
Explanation: [4,9] is also accepted.
```

**Explanation :**
- To find the intersection of two arrays nums1 and nums2 using binary search, we can follow the following steps:
**Algorithn :**
    1. Sort both arrays nums1 and nums2 in ascending order.
    2. Initialize an empty array result to store the intersection elements.
    3. Iterate over each element num in nums1.
        - Use binary search to find if num exists in nums2.
        - If num is found in nums2 and it is not already in result, add it to result.
    4. Return the result array.
- The intersection function returns an array containing the unique elements that are present in both nums1 and nums2, using binary search for efficient searching.