# **Assignment Questions - 24**
## **Question - 04**
## **Group Anagram :**

Given an array of strings `strs`, group **the anagrams** together. 
- You can return the answer in **any order**.
- An **Anagram** is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

**Example - 01 :**
```
Input : strs = ["eat","tea","tan","ate","nat","bat"];

Output : [["bat"],["nat","tan"],["ate","eat","tea"]]
```

**Example - 02 :**
```
Input : strs = [""];

Output : [[""]]
```

**Example - 03 :**
```
Input : strs = ["a"];

Output : [["a"]]
```

**Constraints :**

- 1 <= strs.length <= 10000.
- 0 <= strs[i].length <= 100.
- `strs[i]` consists of lowercase English letters.

**Explanation :**
- The code uses a Map data structure to group anagrams together. 
- It iterates through the array of strings strs and for each string, it performs the following steps:
    - Sorts the characters of the string using the sort() method and joins them back into a sorted string.
    - Checks if the sorted string is already present in the anagramMap. 
        - If it is, it appends the current string to the corresponding group. 
        - Otherwise, it creates a new entry in the anagramMap with the sorted string as the key and an array containing the current string as the value.
- Finally, the code returns the array of arrays of anagrams obtained by converting the values of the anagramMap into an array using Array.from().

**Time Complexity :** 
- The code has a **Time Complexity** of **O(n * m * log(m))**, where n is the number of strings in the input array strs and m is the maximum length of the strings. 
- This is because for each string, the code sorts the characters which takes **O(m * log(m))** **Time Complexity**. 
- The overall time complexity is dominated by the sorting step.

**Space Complexity :** 
- The **space complexity** is **O(n * m)** since the code uses a Map data structure to store the anagrams. 
- In the **worst case**, where all strings are unique, the anagramMap can contain n entries, each having a string of length m.