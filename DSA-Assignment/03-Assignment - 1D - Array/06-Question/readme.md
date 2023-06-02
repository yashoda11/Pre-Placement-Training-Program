# **Assignment - 03**
## **Question 6**
Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
- You must implement a solution with a linear runtime complexity and use only constant extra space.

**Example :**

**Input :** nums = [2,2,1]

**Output :** 1

**Explanation :**
- In the Exapmle, we would use for loop to solve this, since we need to find a non-duplicate element of the array. 
- But first, let's make our life simple by checking if our array has only 1 element.

- ``if (nums.length===1) {
    return nums[0]
}``
- We will need to create result variable.
- ``let result = 0;``
- We will use forEach loop, since we know that we will need to check each element of the array.
- ``nums.forEach(element => {
   result = result ^ element
});``
- The part of that loop that solves this challenge is result = result ^ element so we will look at it deeper. ^ stands for XOR.
- The bitwise XOR operator (^) returns a 1 in each bit position for which the corresponding bits of either but not both operands are 1s.
- XOR performs a Boolean exclusive OR operation on each bit of its integer arguments and by looking at the XOR truth table above: One or the other is true, but not both. 
- Therefore, if all but one value in the array is unique, eventually, each duplicate value will cancel each other out during the bitwise operations and we will end up with a unique non-duplicate value.
- Now we can just return result.
- ``return result;``