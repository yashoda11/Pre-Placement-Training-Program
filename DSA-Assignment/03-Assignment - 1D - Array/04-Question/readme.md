# **Assignment - 03**
## **Question 4**
- Given a sorted array of distinct integers and a target value, 
    - return the index if the target is found. 
    - If not, return the index where it would be if   it were inserted in order.
- You must write an algorithm with O(log n) runtime complexity.

**Example :**

**Input :** nums = [1,3,5,6], target = 5

**Output :** 2

**Explanation :**
- In the example, first we have to take a function and then loop over the array elements.
- Iterates over an nums in the nums, check the target value is present in the given array or not.
    1. If true, return the corresponding array number index.
    2. else add the given target value into the array using unshift method.
        - Then sort the array numbers in increasing order.
        - Now, we have to iterate the loop over the array elements. 
        - Whereever the target value is equals to the array number then return the corresponding array element index.
- Here, we have sorting the array, the 
    - Time Complexity : O(log N).
    - Auxiliary Space :
        - We are not using any data structure for intermediate computations.
        - Hence, the space complexity will be O(1).
    
 


