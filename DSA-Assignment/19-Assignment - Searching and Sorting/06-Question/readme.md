# **Assignment Questions - 19**
## **Question - 06** 
## **Merge Two Sorted Arrays :**

Given two sorted arrays, the task is to merge them in a sorted manner.

**Examples - 01 :**
```
Input: arr1[] = { 1, 3, 4, 5}, arr2[] = {2, 4, 6, 8} 
Output: arr3[] = {1, 2, 3, 4, 4, 5, 6, 8}
```

**Examples - 02 :**
```
Input: arr1[] = { 5, 8, 9}, arr2[] = {4, 7, 8}
Output: arr3[] = {4, 5, 7, 8, 8, 9}
```

**Explanation :**
1. Create an empty array **mergedArray** to store the merged result.
2. Initialize two pointers i and j to the starting indices of arr1 and arr2, respectively.
3. Compare the elements at arr1[i] and arr2[j].
    - If arr1[i] is smaller or equal to arr2[j], append arr1[i] to mergedArray and increment i by 1.
    - If arr2[j] is smaller than arr1[i], append arr2[j] to mergedArray and increment j by 1.
4. Repeat step 3 until either arr1 or arr2 is exhausted (i.e., i or j reaches the end of their respective arrays).
5. If there are any remaining elements in arr1, append them to **mergedArray**.
6. If there are any remaining elements in arr2, append them to **mergedArray**.
7. Return the merged array **mergedArray**.

**Time and Space Complexity :**
- The **Time Complexity** of this approach is **O(n)**, where n is the total number of elements in both arrays. 
- The **Space Complexity** is **O(n)** as well since the merged array may contain all the elements from arr1 and arr2.