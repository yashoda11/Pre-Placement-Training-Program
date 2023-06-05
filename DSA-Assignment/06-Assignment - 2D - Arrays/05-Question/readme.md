# **Assignment - 06**
## **Question 5**

The **product sum** of two equal-length arrays a and b is equal to the sum of a[i] * b[i] for all 0 <= i < a.length (**0-indexed**).
- For example, if a = [1,2,3,4] and b = [5,2,3,1], the **product sum** would be 1*5 + 2*2 + 3*3 + 4*1 = 22.
- Given two arrays nums1 and nums2 of length n, return *the **minimum product sum** if you are allowed to **rearrange** the **order** of the elements in* nums1.

**Example :**

**Input :** nums1 = [5,3,4,2], nums2 = [4,2,2,5]

**Output :** 40

**Explanation:**
- We can rearrange nums1 to become [3,5,4,2]. The product sum of [3,5,4,2] and [4,2,2,5] is 3*4 + 5*2 + 4*2 + 2*5 = 40.
- To find the minimum product sum of two equal-length arrays with the ability to rearrange the elements in one of the arrays, we can sort the arrays in ascending order and multiply the smallest number from one array with the largest number from the other array, and so on, until we have exhausted all the numbers.
- The code sorts nums1 in ascending order and nums2 in descending order using the sort method with a custom comparator function. 
- Then, it iterates through both arrays and multiplies the corresponding elements, adding them to the sum variable.
- Finally, it returns the sum as the minimum product sum.
- For the given input nums1 = [5, 3, 4, 2] and nums2 = [4, 2, 2, 5], the output will be 40 since the minimum product sum is achieved when nums1 is rearranged to [3, 5, 4, 2], and the product sum is 3*4 + 5*2 + 4*2 + 2*5 = 40.





