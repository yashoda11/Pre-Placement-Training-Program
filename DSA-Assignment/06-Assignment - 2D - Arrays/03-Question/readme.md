# **Assignment - 06**
## **Question 3**

Given an array of integers arr, return *true if and only if it is a valid mountain array*.

Recall that arr is a mountain array if and only if:
- arr.length >= 3
- There exists some i with 0 < i < arr.length - 1 such that:
    - arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
    - arr[i] > arr[i + 1] > ... > arr[arr.length - 1]

**Example :**

**Input :** arr = [2,1]

**Output :** false

**Explanation :**
- To determine if an array is a valid mountain array, we can iterate through the array and check if it satisfies the conditions mentioned:
    - The length of the array should be at least 3.
    - There should exist an index i such that 0 < i < arr.length - 1 and arr[0] < arr[1] < ... < arr[i-1] < arr[i] > arr[i+1] > ... > arr[arr.length-1].
- The code first checks if the length of the array is less than 3. 
- If so, it immediately returns false since a valid mountain array must have at least three elements.
- Next, it iterates through the array in the ascending phase until it reaches a peak. 
- The peak should not be the first or last element of the array. 
- If it is, the array is not a valid mountain array, and false is returned.
- Then, it continues iterating through the descending phase. 
- If it successfully reaches the end of the array, it means that all elements after the peak are in strictly decreasing order, satisfying the conditions of a mountain array. 
- In this case, true is returned.
- For the given input arr = [2, 1], the output will be false since the array does not satisfy the conditions of a valid mountain array.