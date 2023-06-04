# **Assignment - 05**
## **Question - 07**

Suppose an array of length n sorted in ascending order is **rotated** between 1 and n times. 
- For Example, the array nums = [0,1,2,4,5,6,7] might become:
    - [4,5,6,7,0,1,2] if it was rotated 4 times.
    - [0,1,2,4,5,6,7] if it was rotated 7 times.

Notice that **rotating** an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].

Given the sorted rotated array nums of **unique** elements, return *the minimum element of this array*.

You must write an algorithm that runs in O(log n) time.

**Example :**

**Input :** nums = [3,4,5,1,2]

**Output :** 1

**Explanation :**
- The original array was [1,2,3,4,5] rotated 3 times.
- To find the minimum element in a sorted rotated array with unique elements, we can use a modified binary search algorithm. 
- The algorithm will compare the middle element with the endpoints to determine which half of the array contains the minimum element.
- **Algorithm :**
- Here's the step-by-step algorithm:
    1. Initialize two pointers, left and right, pointing to the start and end of the array, respectively.
    2. While left is less than right, perform the following steps:
        - Calculate the middle index as mid = Math.floor((left + right) / 2).
        - Compare the element at mid with the elements at left and right.
            - If nums[mid] < nums[right], it means the minimum element is in the left half, so update right = mid.
            - Otherwise, the minimum element is in the right half, so update left = mid + 1.
    3. After the while loop, left will be pointing to the minimum element in the array.
    4. Return nums[left] as the minimum element.
- In this example, we use the binary search algorithm to narrow down the search range until left and right pointers converge. 
- The comparison nums[mid] < nums[right] helps determine which half of the array contains the minimum element. 
- By updating the pointers accordingly, we eventually find the minimum element at the left index.
- The algorithm has a time complexity of O(log n) since it performs a binary search, and it works correctly for rotated arrays with unique elements.