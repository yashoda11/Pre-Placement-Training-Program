# **Assignment - 4**
## **Question 1**
Given three integer arrays arr1, arr2 and arr3 **sorted** in **strictly increasing** order, return a sorted array of **only** the integers that appeared in **all** three arrays.

**Example 1**

Input: arr1 = [1,2,3,4,5], arr2 = [1,2,5,7,9], arr3 = [1,3,4,5,8]

Output: [1,5]

**Explanation:** Only 1 and 5 appeared in the three arrays.
- To find the integers that appear in all three sorted arrays (arr1, arr2, and arr3), we can use a similar three-pointer approach as before. 
- However, this time we'll keep track of the common elements using a set to avoid duplicates. 
- Here's the updated approach:
    - Initialize three pointers p1, p2, and p3 to point to the first elements of arr1, arr2, and arr3, respectively.
    - Initialize an empty set commonElements to store the common integers.
    - While p1, p2, and p3 are within the bounds of their respective arrays:
        - If arr1[p1], arr2[p2], and arr3[p3] are equal, it means we have found a common integer. Add it to the commonElements set and increment all three pointers (p1, p2, and p3) by 1.
        - If any of the values arr1[p1], arr2[p2], or arr3[p3] is less than the other two, increment the pointe for  that array by 1.
    - Convert the commonElements set to an array and sort it in ascending order.
    - Return the sorted array containing the common integers.
- In the example, we use the given input arrays arr1 = [1, 2, 3, 4, 5], arr2 = [1, 2, 5, 7, 9], and arr3 = [1, 3, 4, 5, 8] to demonstrate how the commonElements function works. 
- The output will be [1, 5] since these are the integers that appear in all three arrays.




