# **Assignment - 02**
## **Question 3**

A permutation of an array of integers is an arrangement of its members into a
sequence or linear order.
- For example, for arr = [1,2,3], the following are all the permutations of arr:
[1,2,3], [1,3,2], [2, 1, 3], [2, 3, 1], [3,1,2], [3,2,1].
- The next permutation of an array of integers is the next lexicographically greater permutation of its integer. 
- More formally, if all the permutations of the array are sorted in one container according to their lexicographical order, then the next permutation of that array is the permutation that follows it in the sorted container.
- If such an arrangement is not possible, the array must be rearranged as the lowest possible order (i.e., sorted in ascending order).
- **For example** 
    - The next permutation of arr = [1,2,3] is [1,3,2].
    - Similarly, the next permutation of arr = [2,3,1] is [3,1,2].
    - While the next permutation of arr = [3,2,1] is [1,2,3] because [3,2,1] does not
    have a lexicographical larger rearrangement.
- Given an array of integers nums, find the next permutation of nums.
- The replacement must be in place and use only constant extra memory.

**Example :**

**Input :** nums = [1,2,3]

**Output :** [1,3,2]

**Explanation :**
- We can follow the below steps -
- Scan the array from right to left until an element is found which is smaller than the index at its right. 
- Mark the index of such element as index.
- Again scan the array from right to left until an element is found which is greater than the element found in the above step. 
- Mark the index of such elements as j.
- Swap the two elements at indices index and j.
- Now, reverse the array from index index until the end of the array.

**Time Complexity :**
- We are iterating the array two times. 
- In the worst case, the time complexity will be O(2n) which is equivalent to O(n).

**Space Complexity :**
- We are not using any data structure for intermediate computations. 
- Hence, the space complexity will be O(1).