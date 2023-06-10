# **Assignment - 10**

## **Question - 03**

Given a set represented as a string, write a recursive code to print all subsets of it. The subsets can be printed in any order.

**Example 1:**

Input :  set = “abc”

Output : { “”, “a”, “b”, “c”, “ab”, “ac”, “bc”, “abc”}

**Example 2:**

Input : set = “abcd”

Output : { “”, “a” ,”ab” ,”abc” ,”abcd”, “abd” ,”ac” ,”acd”, “ad” ,”b”, “bc” ,”bcd” ,”bd” ,”c” ,”cd” ,”d” }

**Explanation :**
- In this code, the printSubsets function takes in the set as a string, subset (which keeps track of the current subset being built), and index (the current position in the set). The default values for subset and index are set to an empty string and 0, respectively.
- The base case occurs when index reaches the end of the set. In this case, we print the current subset.
- In the recursive cases, we have two options:
    1. Exclude the current character at index and move to the next character by calling printSubsets(set, subset, index + 1).
    2. Include the current character at index in the subset by appending it to subset and move to the next character by calling printSubsets(set, subset + set[index], index + 1).
- By recursively calling the printSubsets function with different combinations of excluding or including each character, we can generate and print all the subsets of the given set.
- The example usage demonstrates how to print all subsets for the sets "abc" and "abcd". The subsets are printed to the console.