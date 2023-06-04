# **Assignment - 05**
## **Question 4**

Given two **0-indexed** integer arrays nums1 and nums2, return *a list* answer *of size* 2 *where:*
- answer[0] *is a list of all **distinct** integers in* nums1 *which are **not** present in* nums2*.*
- answer[1] *is a list of all **distinct** integers in* nums2 *which are **not** present in* nums1.
- **Note :** That the integers in the lists may be returned in **any** order.

**Example :**

**Input :** nums1 = [1,2,3], nums2 = [2,4,6]

**Output :** [[1,3],[4,6]]

**Explanation :**
- For nums1, nums1[1] = 2 is present at index 0 of nums2, whereas nums1[0] = 1 and nums1[2] = 3 are not present in nums2. Therefore, answer[0] = [1,3].
- For nums2, nums2[0] = 2 is present at index 1 of nums1, whereas nums2[1] = 4 and nums2[2] = 6 are not present in nums2. Therefore, answer[1] = [4,6].
- To find the distinct integers that are present in one array but not in the other, we can use sets to efficiently perform the comparison. 
- Here's the approach we can follow:
    1. Convert nums1 and nums2 into sets, set1 and set2 respectively, to eliminate duplicate elements and make the   lookup operation faster.
    2. Initialize two empty lists, notInNums2 and notInNums1, to store the distinct integers that are not present in nums2 and nums1, respectively.
    3. Iterate over each element in nums1 and check if it exists in set2. If it does not exist, add it to notInNums2.
    4. Iterate over each element in nums2 and check if it exists in set1. If it does not exist, add it to notInNums1.
    5. Return a list containing notInNums1 and notInNums2.
- In the given example, we have nums1 = [1, 2, 3] and nums2 = [2, 4, 6]. 
- The code finds the distinct integers that are present in nums1 but not in nums2 and vice versa. 
- The output will be [[1, 3], [4, 6]], indicating that [1, 3] are the distinct integers in nums1 not present in nums2, and [4, 6] are the distinct integers in nums2 not present in nums1.
