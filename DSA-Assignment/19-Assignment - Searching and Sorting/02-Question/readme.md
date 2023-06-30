# **Assignment Questions - 19**
## **Question - 02** 
## **Count of Smaller Numbers After Self**

Given an integer array `nums`, return *an integer array* `counts` *where* `counts[i]` *is the number of smaller elements to the right of* `nums[i]`.

**Example -1 :**
```
Input : nums = [5,2,6,1]
Output : [2,1,1,0]
Explanation :
To the right of 5 there are2 smaller elements (2 and 1).
To the right of 2 there is only1 smaller element (1).
To the right of 6 there is1 smaller element (1).
To the right of 1 there is0 smaller element.
```

**Example - 02 :**
```
Input : nums = [-1]
Output : [0]
```

**Example - 03 :**
```
Input: nums = [-1,-1]
Output: [0,0]
```

**Constraints:**
- 1 <= nums.length <= 100000
- -10000 <= nums[i] <= 10000

**Explanation :**
- To solve this problem efficiently, we can use the "Merge Sort" algorithm with a modification. 
- While performing the merge step of Merge Sort, we can count the number of smaller elements to the right of each element.
- The countSmaller function takes an array nums as input and returns an array counts where counts[i] represents the number of smaller elements to the right of nums[i].
- In the implementation, we create an array counts of the same length as nums and initialize it with zeros. This array will store the count of smaller elements for each element in nums.
- We also create an array indices which initially contains the indices of nums. This will help us track the original indices while merging.
- The mergeSort function implements the merge sort algorithm. 
- It recursively divides the array into smaller subarrays until each subarray has only one element, and then merges the subarrays while counting the number of smaller elements.
- The merge function performs the merge step of the merge sort algorithm. 
- It compares the elements from the left and right subarrays and counts the number of smaller elements on the right side while merging.
- After performing the merge sort, the counts array will contain the desired counts of smaller elements to the right of each element in nums.
- Finally, the counts array is returned as the result.

**Output :**
- The outputs for the given example cases are as follows:
    - **Example - 01 :** For the input [5, 2, 6, 1], the counts of smaller elements to the right are [2, 1, 1, 0].
    - **Example - 02 :** For the input [-1], there are no smaller elements to the right, so the output is [0].
    - **Example - 03 :** For the input [-1, -1], there are no smaller elements to the right for both elements, so the output is [0, 0].