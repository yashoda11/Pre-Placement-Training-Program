# **Assignment Questions - 17**
## **Question - 02**

Given a **circular integer array** `nums` of length `n`, return *the maximum possible sum of a non-empty **subarray** of* `nums`.
- A **circular array** means the end of the array connects to the beginning of the array. Formally, the next element of `nums[i]` is `nums[(i + 1) % n]` and the previous element of `nums[i]` is `nums[(i - 1 + n) % n]`.
- A **subarray** may only include each element of the fixed buffer `nums` at most once. Formally, for a subarray `nums[i], nums[i + 1], ..., nums[j]`, there does not exist `i <= k1`, `k2 <= j` with `k1 % n == k2 % n`.

**Example - 01 :**
```
Input : nums = [1,-2,3,-2]
Output : 3
Explanation : 
Subarray [3] has maximum sum 3.
```

**Example - 02 :**
```
Input : nums = [5,-3,5]
Output : 10
Explanation : 
Subarray [5,5] has maximum sum 5 + 5 = 10.
```

**Example - 03 :**
```
Input : nums = [-3,-2,-3]
Output : -2
Explanation : 
Subarray [-2] has maximum sum -2.
```

**Analysis :**
1. The maxSubarraySumCircular function takes an array nums as input.
2. Inside the function, we first calculate the length of the array n.
3. Next, we define two helper functions: maxSubarraySum and minSubarraySum, which use Kadane's algorithm to calculate the maximum and minimum sums of subarrays, respectively. These functions take an array nums as input and return the respective maximum or minimum sum.
4. After defining the helper functions, we calculate the maximum sum of a non-empty subarray using Kadane's algorithm by calling maxSubarraySum(nums) and store the result in the variable maxSum.
5. Similarly, we calculate the minimum sum of a subarray using Kadane's algorithm by calling minSubarraySum(nums) and store the result in the variable minSum.
6. If the maxSum is less than or equal to 0, it means that all elements in the array are negative or zero. In this case, there is no positive subarray, and we can simply return maxSum as the result.
7. Otherwise, if there are positive elements in the array, we calculate the sum of all elements in the array using the reduce function: nums.reduce((acc, val) => acc + val, 0). We subtract the minSum from this sum to obtain the maximum sum of a circular subarray and store it in the variable circularMaxSum.
8. Finally, we return the maximum value between maxSum and circularMaxSum using the Math.max function as the overall result.
- The code uses Kadane's algorithm to efficiently find the maximum and minimum sum subarrays. 
- The main idea behind Kadane's algorithm is to iterate through the array and keep track of the current sum. 
- If the current sum becomes negative, we reset it to 0 because a negative sum would only decrease the total sum.
- We also keep track of the maximum or minimum sum seen so far to obtain the final result.
- The function handles both non-circular and circular subarrays effectively by calculating the maximum sum using Kadane's algorithm for non-circular subarrays and subtracting the minimum sum from the total sum for circular subarrays.