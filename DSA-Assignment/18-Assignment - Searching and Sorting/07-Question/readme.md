# **Assignment Questions - 18**
## **Question - 07** 
## **Longest Increasing Subsequence**

Given an integer array nums, 
- return the length of the longest **strictly increasing subsequence.**

**Example - 01 :**
```
Input : nums = [10,9,2,5,3,7,101,18]
Output : 4
Explanation : 
The longest increasing subsequence is [2,3,7,101], 
therefore the length is 4.
```

**Example - 02 :**
```
Input : nums = [0,1,0,3,2,3]
Output : 4
```

**Example - 03 :**
```
Input : nums = [7,7,7,7,7,7,7]
Output : 1
```

**Constraints :**
- 1 <= nums.length <= 2500
- -10^4 <= nums[i] <= 10^4

**Analysis :**
- To find the length of the longest strictly increasing subsequence in the given array nums, we can use the **Dynamic Programming approach**.
- **Algorithm :**
    1. Initialize an array dp of the same length as nums to store the lengths of the longest increasing subsequences ending at each index. 
        - Set all values in dp to 1 initially since the minimum length of an increasing subsequence is 1.
    2. Iterate through the elements of nums starting from the second element.
        - For each element at index i, iterate through all previous elements from 0 to i-1.
        - If the current element nums[i] is greater than the previous element nums[j], it means we can extend the increasing subsequence ending at index j by including the current element. 
            - Check if the length of the increasing subsequence ending at index j plus 1 is greater than the current value in dp[i]. 
            - If it is, update dp[i] with the new length.
    3. Find the maximum value in the dp array and return it as the length of the longest increasing subsequence.
- **Explanation :**
    - The lengthOfLIS function takes an array nums as input and implements the steps mentioned above to find the length of the longest strictly increasing subsequence.
    - We first check if the length of nums is 0. 
        - If it is, we return 0 since there are no elements in the array.
    - We initialize an array dp of length n, where n is the length of nums, to store the lengths of the longest increasing subsequences ending at each index. 
        - We set all values in dp to 1 initially since the minimum length of an increasing subsequence is 1.
    - We then iterate through the elements of nums starting from the second element.
    - For each element at index i, we iterate through all previous elements from 0 to i-1.
    - If the current element nums[i] is greater than the previous element nums[j], it means we can extend the increasing subsequence ending at index j by including the current element. 
        - We check if the length of the increasing subsequence ending at index j plus 1 is greater than the current value in dp[i]. 
        - If it is, we update dp[i] with the new length.
    - After iterating through all elements, we find the maximum value in the dp array and return it as the length of the longest increasing subsequence.
- **OUTPUT :**
    - The **Outputs** for the given **Example Cases** are as follows:
        - **Example - 01 :** The longest increasing subsequence is **[2, 3, 7, 101]**, so the **length is 4**.
        - **Example - 02 :** The longest increasing subsequence is **[0, 1, 2, 3]**, so the **length is 4**.
        - **Example - 03 :** All elements in the array are the same, so the longest increasing subsequence is **[7]** and the **length is 1.**