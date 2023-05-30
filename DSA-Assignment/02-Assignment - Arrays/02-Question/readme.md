# **Assignment - 02**
**Question 2**

Alice has n candies, where the ith candy is of type candyType[i]. Alice noticed that she started to gain weight, so she visited a doctor. 
- The doctor advised Alice to only eat n / 2 of the candies she has (n is always even). Alice likes her candies very much, and she wants to eat the maximum number of different types of candies while still following the doctor's advice. 
- Given the integer array candyType of length n, return the maximum number of different types of candies she can eat if she only eats n / 2 of them.

**Example :**

**Input:** candyType = [1,1,2,2,3,3]

**Output:** 3

**Explanation**: 
- Alice can only eat 6 / 2 = 3 candies. Since there are only 3 types, she can eat one of each type.
- In order to solve this problem, we need to identify how many unique types of candy there are. The easiest method to find unique values is with a set. 
- If we convert our input array of candy types (C) to a set, then it will only contain unique values, and thus the size of the set will represent the number of different candy types.
- The only other thing to remember is that we're constrained to at most C.length / 2 pieces, per the instructions, so we need to use a min() boundary before we return our answer.


