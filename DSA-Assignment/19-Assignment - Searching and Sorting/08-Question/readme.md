# **Assignment Questions - 19**
## **Question - 08** 
## **Intersection of Two Arrays II**

Given two integer arrays `nums1` and `nums2`, return *an array of their intersection*. 
- Each element in the result must appear as many times as it shows in both arrays and you may return the result in **any order**.

**Example - 01 :**
```
Input : nums1 = [1,2,2,1], nums2 = [2,2]
Output : [2,2]
```

**Example - 02 :**
```
Input : nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output : [4,9]
Explanation : 
[9,4] is also accepted.
```

**Constraints :**

- 1 <= nums1.length, nums2.length <= 1000
- 0 <= nums1[i], nums2[i] <= 1000

**Analysis :**
- To find the intersection of two arrays while considering the count of each element, we can use a hash map to store the frequency of elements in one array, and then iterate through the other array to check if each element is present in the map. 
- If an element is found in both arrays, we add it to the intersection array and decrement its frequency in the map.
- The code creates a map frequencyMap to store the frequency of elements in nums1. 
- Then, it iterates through nums2 to find the common elements while considering their frequencies.

**Time and Space Complexity :**
- The **Time Complexity** of this solution is **O(n + m)**, where n and m are the lengths of nums1 and nums2, respectively.
- The **Space Complexity** of the above solution is **O(min(n, m))**, where n and m are the lengths of nums1 and nums2, respectively.
- In the solution, we create a map frequencyMap to store the frequency of elements from nums1. 
- The size of the map will be at most the length of nums1, so the space complexity of creating the map is O(n).
- Additionally, we create an array intersectionArr to store the intersection elements. 
- The size of this array can be at most min(n, m) if all elements in nums2 are unique and present in nums1.
- Therefore, the space complexity for intersectionArr is O(min(n, m)).
- Overall, the space complexity of the solution is dominated by the space used for the map and the intersection array, which is O(min(n, m)).