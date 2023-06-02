# **Assignment - 03**
## **Question 7**
You are given an inclusive range [lower, upper] and a sorted unique integer array nums, where all elements are within the inclusive range.
- A number x is considered missing if x is in the range [lower, upper] and x is not in
nums.
- Return the shortest sorted list of ranges that exactly covers all the missing numbers. 
- That is, no element of nums is included in any of the ranges, and each missing number is covered by one of the ranges.

**Example :**

**Input :** nums = [0,1,3,50,75], lower = 0, upper = 99

**Output :** [[2,2],[4,49],[51,74],[76,99]]

**Explanation :** 
- The ranges are:
[2,2]
[4,49]
[51,74]
[76,99]
- To solve the problem, we can follow these steps:
- Initialize an empty result array to store the ranges.
- Set a variable start as the lower bound.
- Iterate over the nums array:
- If the current number is equal to start, increment start by 1.
- If the current number is greater than start, there is a missing range. 
- Add the range from start to the current number minus 1 to the result array. 
- Update start to be the current number plus 1.
After the loop ends, if start is less than or equal to the upper bound, add the range from start to the upper bound to the result array.
- Return the result array.
- In the example , we use the given input [0, 1, 3, 50, 75], lower = 0, and upper = 99 to demonstrate how the findMissingRanges function works. 
- The output will be [[2, 2], [4, 49], [51, 74], [76, 99]] as explained in the example explanation.




