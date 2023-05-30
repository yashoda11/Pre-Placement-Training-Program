# **Assignment - 02**

**Question 3 :**

We define a harmonious array as an array where the difference between its maximum value
and its minimum value is exactly 1.
- Given an integer array nums, return the length of its longest harmonious subsequence
among all its possible subsequences.
- A subsequence of an array is a sequence that can be derived from the array by deleting some or no elements without changing the order of the remaining elements.

**Example :**

**Input:** nums = [1,3,2,2,5,2,3,7];

**Output:** 5

**Explanation:** 
- The longest harmonious subsequence is [3,2,2,2,3].
- In the code, the findLongestHarSubseq function takes an array nums as an argument and returns the length of the longest harmonious subsequence. The function uses a Map called numCount to count the frequency of each number in the array.
- Then, it iterates through the numbers in the array and checks if the array contains both the current number (num) and the number (num + 1). If it does, it calculates the length of the current harmonious subsequence by adding the counts of both numbers and updates the maxLen variable if necessary.
- Finally, the function returns the maximum length found. In the example test case provided, the longest harmonious subsequence in the array [1, 3, 2, 2, 5, 2, 3, 7] is [3, 2, 2, 2, 3], which has a length of 5, so the output of the function is 5.