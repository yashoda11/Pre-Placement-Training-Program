# **Assignment - 02**

## **Question 8**
You are given an integer array nums and an integer k.
- In one operation, you can choose any index i where 0 <= i < nums.length and change nums[i] to nums[i] + x where x is an integer from the range [-k, k]. 
- You can apply this operation at most once for each index i.
- The score of nums is the difference between the maximum and minimum elements in nums.
- Return the minimum score of nums after applying the mentioned operation at most once for each index in it.

**Example :**

**Input :** nums = [1], k = 0

**Output :** 0

**Explanation :** 
- The score is max(nums) - min(nums) = 1 - 1 = 0.
- Initialize minScore as positive infinity.
- Iterate over each element in the nums array.
- For each element, we will consider it as the minimum value and add k to it.
- Then, we will consider it as the maximum value and subtract k from it.
- Calculate the score by finding the difference between the maximum and minimum values in the modified nums array.
- Update minScore with the minimum value between the current minScore and the calculated score.
- Finally, return the value of minScore.
- In the example, we use the given input [1] and k = 0 to demonstrate how the minimumScore function works.
- The output will be 0.



