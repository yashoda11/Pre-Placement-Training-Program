# **Assignment Questions - 19**
## **Question - 05** 
## **Rearrange array in alternating positive & negative items with O(1) extra space**

Given an **array of positive** and **negative numbers**, arrange them in an **alternate** fashion such that every positive number is followed by a negative and vice-versa maintaining the **order of appearance**. 
- The number of positive and negative numbers need not be equal. 
- If there are more positive numbers they appear at the end of the array. 
- If there are more negative numbers, they too appear at the end of the array.

**Examples - 01 :**
```
Input :  arr[] = {1, 2, 3, -4, -1, 4}
Output : arr[] = {-4, 1, -1, 2, 3, 4}
```

**Examples - 02 :**
```
Input:  arr[] = {-5, -2, 5, 2, 4, 7, 1, 8, 0, -8}
Output: arr[] = {-5, 5, -2, 2, -8, 4, 7, 1, 8, 0}
```

**Explanation :**
1. Iterate through each element of the array using the for loop.
2. If the current index i is even and the element at arr[i] is positive (arr[i] >= 0), it checks for the next negative number by incrementing j until a negative number is found or the end of the array is reached.
3. If a negative number is found (j < n), it shifts the elements to the right from arr[j] to arr[i] by one position, creating a space for the negative number at index i.
4. Finally, it assigns the negative number arr[j] to arr[i].
5. Similar steps are performed when i is odd and the element at arr[i] is negative (arr[i] < 0).


**Time Complexity :**
-  The worst-case **Time Complexity** of this code is **O(n^2)**. 
- In the worst case, each iteration of the outer loop requires searching for the next positive/negative number in the inner loop, which may result in traversing the entire array. 
- As a result, the overall time complexity is O(n^2).

**Space Complexity :**
- The **Space Complexity** of the code is **O(1)** because it does not use any extra space that grows with the input size. 
- It performs all modifications in place, directly modifying the given array.