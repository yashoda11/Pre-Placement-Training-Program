# **Assignment Questions - 16**
## **Question - 08**

Given an array of integers, the task is to find the maximum absolute difference between the nearest left and the right smaller element of every element in the array.
- **Note:** 
    - If there is no smaller element on right side or left side of any element then we take zero as the smaller element. 
    - For example for the leftmost element, the nearest smaller element on the left side is considered as 0.
    - Similarly, for rightmost elements, the smaller element on the right side is considered as 0.

**Example -01 :**
```
Input : arr[] = {2, 1, 8}
Output : 1
Explanation :
Left smaller  LS[] {0, 0, 1}
Right smaller RS[] {1, 0, 0}
Maximum Diff of abs(LS[i] - RS[i]) = 1
```

**Example -02 :**
```
Input  : arr[] = {2, 4, 8, 7, 7, 9, 3}
Output : 4
Explanation :
Left smaller   LS[] = {0, 2, 4, 4, 4, 7, 2}
Right smaller  RS[] = {0, 3, 7, 3, 3, 3, 0}
Maximum Diff of abs(LS[i] - RS[i]) = 7 - 3 = 4
```

**Example -03 :**
```
Input : arr[] = {5, 1, 9, 2, 5, 1, 7}
Output : 1
```

**Analysis :**
- To find the maximum absolute difference between the nearest left and right smaller elements of every element in the array, we can use a stack to keep track of the nearest smaller elements. 
    1. The maxAbsDifference() function takes an array of integers as input.
    2. We initialize an array LS (left smaller) and RS (right smaller) with the same length as the input array, filled with zeros.
    3. We also initialize an empty stack.
    4. We iterate over the array from left to right to find the nearest smaller element on the left side of each element. We do this by comparing each element with the topmost element in the stack. If the current element is smaller, we pop elements from the stack until we find an element that is smaller than the current element or the stack becomes empty. The nearest smaller element on the left side is then the topmost element in the stack (if the stack is not empty) or 0 (if the stack is empty). We store this value in the LS array.
    5. We clear the stack to reuse it for finding the nearest smaller element on the right side.
    6. We iterate over the array from right to left to find the nearest smaller element on the right side of each element. The process is similar to the previous step, but this time we compare each element with the topmost element in the stack from the right side. We store the nearest smaller element on the right side in the RS array.
    7. After finding the LS and RS arrays, we iterate over the array once again to find the maximum absolute difference between the corresponding elements of LS and RS. We update the maxDiff variable with the maximum difference.
    8. Finally, we return the maxDiff, which represents the maximum absolute difference between the nearest left and right smaller elements of every element in the array.
    9. We demonstrate the usage of the code by providing three example arrays and printing the maximum absolute difference for each array.