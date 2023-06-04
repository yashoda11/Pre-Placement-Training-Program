# **Assignment - 06**
## **Question - 01**
A permutation perm of n + 1 integers of all the integers in the range [0, n] can be represented as a string s of length n where:
- s[i] == 'I' if perm[i] < perm[i + 1], and
- s[i] == 'D' if perm[i] > perm[i + 1].

Given a string s, reconstruct the permutation perm and return it. If there are multiple valid permutations perm, return **any of them**.

**Example :**

**Input:** s = "IDID"

**Output:** [0,4,1,3,2]

**Explanation :**
- To reconstruct the permutation perm from the given string s, we can follow a simple algorithm.
- We start with an initial permutation [0, 1, 2, ..., n] and apply the operations based on the characters in s.
- Here's the step-by-step algorithm:
- **Algorithm :**
    1. Initialize an empty array perm to store the reconstructed permutation.
    2. Initialize variables:
        - Set n to the length of s.
        - Set low to 0, representing the lowest number in the remaining unused numbers.
        - Set high to n, representing the highest number in the remaining unused numbers.
    3. Iterate through each character ch in s:
        - If ch is 'I', append low to perm and increment low by 1.
        - If ch is 'D', append high to perm and decrement high by 1.
    4. After iterating through all characters in s, there will be one remaining number that hasn't been added to perm. Append this number to perm.
    5. Return the reconstructed permutation perm.
- In this example, we iterate through each character in the string s and based on whether the character is 'I' or 'D', we append the corresponding number to the perm array. 
- We maintain two pointers low and high to track the lowest and highest numbers in the remaining unused numbers. 
- After the iteration, we add the remaining number to perm and return the reconstructed permutation.
- The output will be [0, 4, 1, 3, 2] for the given input s = "IDID".






