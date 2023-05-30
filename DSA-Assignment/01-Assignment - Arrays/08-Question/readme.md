# Question - 8
**Q8.** You have a set of integers s, which originally contains all the numbers from 1 to n. Unfortunately, due to some error, one of the numbers in s got duplicated to another number in the set, which results in repetition of one number and loss of another number.

- You are given an integer array nums representing the data status of this set after the error.

- Find the number that occurs twice and the number that is missing and return them in the form of an array.

**Example 1:**

**Input:** 
nums = [1,2,2,4]

**Output:**
[2,3]


**Explanation**
- The input consisting of numbers from 1 to n. 
- In which, one number is taken twice hence, its corresponding next number is missing.
- let i = 0 (for iteration over the given array numbers)

- At ``i = 1``
- ``nums[i] === nums[i+1]``
- ``nums[1] === nums[1+1]`` which is equals to 2
- For getting output, we have to display nums[1] values and its next corresponding numbered Values.
- which is : [2,3]
 
