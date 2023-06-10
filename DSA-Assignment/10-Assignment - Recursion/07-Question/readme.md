# **Assignment - 10**

## **Question 7**

Given a string **str**, the task is to print all the permutations of **str**. A **permutation** is an arrangement of all or part of a set of objects, with regard to the order of the arrangement. For instance, the words ‘bat’ and ‘tab’ represents two distinct permutation (or arrangements) of a similar three letter word.

**Examples - 01 :**

**Input :** str = “cd”

**Output :** cd dc

**Examples - 02 :**

**Input :** str = “abb”

**Output :** abb abb bab bba bab bba

**Explanation :**
- In this code, the swap function swaps two characters at indices i and j in the string. 
- It converts the string to an array of characters, performs the swap, and then converts it back to a string.
- The permutations function is a recursive function that generates all permutations of the given string. 
- It takes four parameters: str is the input string, left is the starting index of the current substring, right is the ending index of the current substring, and result is an array to store the generated permutations.
- The base case is when left is equal to right, which means we have reached the end of the substring. 
- In this case, we add the current permutation to the result array.
- For each character at index i in the current substring, we swap it with the character at index left to generate different permutations. 
- Then, we recursively call the permutations function to generate permutations for the remaining substring (from left + 1 to right). 
- After that, we backtrack by swapping the characters back to their original positions.
- The printPermutations function initializes an empty array result and calls the permutations function to generate all permutations of the input string. 
- Finally, it returns the result array.