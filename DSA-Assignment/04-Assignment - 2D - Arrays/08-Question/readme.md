# **Assignment - 04** 
## **Question 8**

Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].
- Return the array in the form [x1,y1,x2,y2,...,xn,yn].

**Example :**

**Input :** nums = [2,5,1,3,4,7], n = 3

**Output :** [2,3,5,4,1,7]

**Explanation :** 
- Since x1=2, x2=5, x3=1, y1=3, y2=4, y3=7 then the answer is [2,3,5,4,1,7].
- In the given example, we have nums = [1, 2, 3, 4, 5, 6] and n = 3. 
- The code iterates from i = 0 to n - 1 and pushes the corresponding elements at index i and index n + i to the result array. 
- Finally, it returns the result array, which represents the rearranged array in the required form.
- **Note :** The code assumes that the input array nums has exactly 2n elements, where the first n elements represent x1, x2, ..., xn, and the remaining n elements represent y1, y2, ..., yn.







