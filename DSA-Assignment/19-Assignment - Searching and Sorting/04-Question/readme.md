# **Assignment Questions - 19**
## **Question - 04** 
## **Move all zeroes to end of array**

Given an array of random numbers, Push all the zero’s of a given array to the end of the array. 
- For example, if the given arrays is {1, 9, 8, 4, 0, 0, 2, 7, 0, 6, 0}, it should be changed to {1, 9, 8, 4, 2, 7, 6, 0, 0, 0, 0}. 
- The order of all other elements should be same. 
- Expected time complexity is O(n) and extra space is O(1).

**Example - 01 :**
```
Input :  arr[] = {1, 2, 0, 4, 3, 0, 5, 0};
Output : arr[] = {1, 2, 4, 3, 5, 0, 0, 0};
```

**Example - 02 :**
```
Input : arr[]  = {1, 2, 0, 0, 0, 3, 6};
Output : arr[] = {1, 2, 3, 6, 0, 0, 0};
```

**Explanation :**
- To move all zeroes to the end of the array while maintaining the order of other elements, we can use a **two-pointer approach**. 
- The basic idea is to iterate through the array and swap non-zero elements towards the front of the array.
- The moveZeroesToEnd function takes an array arr as input and moves all the zeroes to the end of the array while maintaining the order of other elements.
- It uses two pointers : 
    - **i** for non-zero elements and 
    - **j** for iterating through the array.
- For each element at index j, if it is non-zero, it is swapped with the element at index i using destructuring assignment.
- After swapping, i is incremented to keep track of the next position where a non-zero element should be placed.
- The function modifies the original array in-place.

**Output - Testing Examples :**
- The outputs for the given example cases are as follows:
    - **Example - 01 :** For the input **[1, 2, 0, 4, 3, 0, 5, 0]**, the array is modified to **[1, 2, 4, 3, 5, 0, 0, 0]**.
    - **Example - 02 :** For the input **[1, 2, 0, 0, 0, 3, 6]**, the array is modified to **[1, 2, 3, 6, 0, 0, 0]**.

**Time and Space Complexity :**
- The **Time Complexity** of this approach is **O(n)**, where n is the length of the array, as we iterate through the array only once. 
- The **Space Complexity** is **O(1)** as we are modifying the array in-place without using any extra space.