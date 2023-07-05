# **Assignment Questions - 19**
## **Question - 07** 
## **Intersection of Two Arrays I**

Given two integer arrays `nums1` and `nums2`, return *an array of their intersection*. Each element in the result must be **unique** and you may return the result in **any order**.

**Example - 01 :**
```
Input : nums1 = [1,2,2,1], nums2 = [2,2]
Output : [2]
```

**Example - 02 :**
```
Input : nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output : [9,4]
Explanation: [4,9] is also accepted.
```

**Constraints:**
- 1 <= nums1.length, nums2.length <= 1000
- 0 <= nums1[i], nums2[i] <= 1000

**Analysis :**
- To find the intersection of two arrays, we can use a **hash set** to store the unique elements from one array, and then iterate through the other array to check if each element is present in the set. 
- If an element is found in both arrays, it is part of the intersection.
- The code creates a set from the first array nums1, and then iterates through the second array nums2 to find the common elements. 

**Time and Space Complexity :**
- The **Time Complexity** of the solution is **O(n + m)**, where n and m are the lengths of nums1 and nums2, respectively.
- The **Space Complexity** of the solution is **O(min(n, m))**, where n and m are the lengths of nums1 and nums2, respectively.
- In the given provided solution, we create a set to store the unique elements from nums1. 
- The size of the set will be at most the length of nums1, so the space complexity of creating the set is O(n).
- Additionally, we create an array intersectionArr to store the intersection elements, which can have a maximum size of min(n, m) if all elements in nums2 are unique and present in nums1. 
- Therefore, the space complexity for intersectionArr is O(min(n, m)).