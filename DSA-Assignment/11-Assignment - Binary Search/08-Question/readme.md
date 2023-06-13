# **Assignment Questions - 11**

## **Question - 08**

Given two integer arrays `nums1` and `nums2`, return *an array of their intersection*. 
- Each element in the result must appear as many times as it shows in both arrays and you may return the result in **any order**.

**Example - 01:**
```
Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2,2]
```

**Example - 02:**
```
Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [4,9]
Explanation: [9,4] is also accepted.
```

**Explanatio :**
- To find the intersection of two integer arrays nums1 and nums2 using binary search, we can first sort both arrays. 
- Then, for each element in one array, we perform a binary search in the other array to check if it exists. 
- If it does, we add it to the result array and remove the element from the other array to handle duplicates.
- The intersect function takes in two arrays nums1 and nums2 and returns their intersection, considering the frequency of elements in both arrays. 
- The binary search approach helps in finding the intersection efficiently.