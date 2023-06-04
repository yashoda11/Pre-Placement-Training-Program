# **Assignment - 05**
## **Question 5**

Given two integer arrays arr1 and arr2, and the integer d, **return the distance value between the two arrays**.
- The distance value is defined as the number of elements arr1[i] such that there is not any element arr2[j] where |arr1[i]-arr2[j]| <= d.

**Example :**

**Input :** arr1 = [4,5,8], arr2 = [10,9,1,8], d = 2

**Output :** 2

**Explanation :**

1. For arr1[0] = 4 we have :

    - |4-10|=6 > d=2
    - |4-9|=5 > d=2
    - |4-1|=3 > d=2
    - |4-8|=4 > d=2
2. For arr1[1] = 5 we have :
    - |5-10|=5 > d=2
    - |5-9|=4 > d=2
    - |5-1|=4 > d=2
    - |5-8|=3 > d=2
3. For arr1[2] = 8 we have :
    - **|8-10|=2 <= d=2**
    - **|8-9|=1 <= d=2**
    - |8-1|=7 > d=2
    - **|8-8|=0 <= d=2**
- To find the distance value between two arrays arr1 and arr2 with a given integer d, we can iterate through each element of arr1 and check if there exists any element in arr2 that satisfies the condition |arr1[i] - arr2[j]| <= d. 
- If no such element is found, we increment a counter representing the distance value.
- In the given example, we have arr1 = [4, 5, 8], arr2 = [10, 9, 1, 8], and d = 2. The code initializes the distance variable to 0, which represents the distance value.
- Then, it iterates through each element of arr1 using a for loop. Inside the outer loop, it initializes a boolean variable found to false, which indicates whether a matching element is found in arr2.
- Inside the inner loop, the code compares the absolute difference between arr1[i] and each element in arr2 using Math.abs(arr1[i] - arr2[j]). If the condition Math.abs(arr1[i] - arr2[j]) <= d is satisfied for any element in arr2, it sets found to true and breaks out of the inner loop.
- After completing the inner loop for each element in arr1, the code checks if found is still false. If found is false, it means that no matching element was found in arr2, and it increments the distance variable by 1.
- Finally, the code returns the value of the distance variable, which represents the distance value between the two arrays.
- **Note :** The code assumes that the input arrays arr1 and arr2 are not empty and the input values of d are valid.






