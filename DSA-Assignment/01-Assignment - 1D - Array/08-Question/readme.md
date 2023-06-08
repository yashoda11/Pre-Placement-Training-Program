# **Assignment - 01**
## **Question - 8**
**Q8.** You have a set of integers s, which originally contains all the numbers from 1 to n. Unfortunately, due to some error, one of the numbers in s got duplicated to another number in the set, which results in repetition of one number and loss of another number.
- You are given an integer array nums representing the data status of this set after the error.
- Find the number that occurs twice and the number that is missing and return them in the form of an array.
**Example :**

**Input:** 
nums = [1,2,2,4]

**Output:**
[2,3]

**Explanation**
- The input consisting of numbers from 1 to n. 
- In which, one number is taken twice hence, its corresponding next number is missing.
- In this code, we create a set called set to keep track of the unique elements encountered in the nums array. 
- We iterate through the nums array and check if an element is already present in the set. 
- If it is, then it is the duplicate number. 
- Otherwise, we add it to the set.
- After that, we iterate from 1 to n (where n is the length of nums) and check if each number is present in the set. 
- If a number is missing from the set, we store it as the missing number.
- Finally, we return an array [duplicate, missing] containing the found duplicate and missing numbers.
- In the example usage, the nums array is [1, 2, 2, 4]. 
- The code finds that the number 2 occurs twice, making it the duplicate number, and the number 3 is missing. Hence, the output is [2, 3].