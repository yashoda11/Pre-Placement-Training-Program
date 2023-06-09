# **Assignment Questions - 09**

## **Question - 07**

Given a string S, the task is to write a program to print all permutations of a given string.

**Example 1:**

**Input:**   S = “ABC”

**Output:** *“ABC”, “ACB”, “BAC”, “BCA”, “CBA”, “CAB”*

**Example 2:**

**Input:**  S = “XY”

**Output:**  “XY”, “YX”

**Explanation :**
- In this code, the printPermutations function takes a string S as input.
- Inside the function, we initialize a visited array to keep track of the characters that have been used in a particular permutation and a permutation array to store the current permutation being generated.
- The generatePermutations function is a recursive helper function that takes an index as an argument. If the index is equal to the length of the string, it means we have formed a complete permutation. In this case, we print the current permutation and return.
- If the index is less than the length of the string, we iterate over all the characters of the string. For each character, if it has not been visited yet, we mark it as visited, store it in the permutation array at the current index, and make a recursive call to generatePermutations with the incremented index. After the recursive call, we mark the character as unvisited to allow other permutations to be formed.
- Finally, in the example usage, we call printPermutations with the strings "ABC" and "XY". The output will be all possible permutations of the given strings. For the first example, the output will be "ABC", "ACB", "BAC", "BCA", "CBA", "CAB". For the second example, the output will be "XY" and "YX".