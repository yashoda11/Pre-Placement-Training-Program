# **Assignment Questions - 17**

## **Question - 01**

Given a string `s`, *find the first non-repeating character in it and return its index*. 
- If it does not exist, return `-1`.

**Example - 01 :**
```
Input: s = "leetcode"
Output: 0
```

**Example - 02 :**
```
Input: s = "loveleetcode"
Output: 2
```

**Example - 03 :**
```
Input: s = "aabb"
Output: -1
```

**Explanation :**
1. We define a function called findFirstNonRepeatingChar that takes a string s as input.
2. We create an empty queue queue to store the characters along with their indices. We also create an empty object charCount to keep track of the count of each character.
3. We iterate through each character in the string using a for loop.
4. For each character, we check if it exists in the charCount object. If it doesn't, it means it's the first occurrence of that character, so we add it to charCount with a count of 1, and push it to the queue along with its index.
5. If the character already exists in charCount, it means it's a repeating character. We increment its count in charCount.
6. We then check the first character in the queue. If its count in charCount is greater than 1, it means it's no longer a non-repeating character, so we remove it from the queue by using the shift() method until we find a non-repeating character or the queue becomes empty.
7. After processing all characters in the string, we check if the queue is not empty. If it is, it means there were no non-repeating characters, so we return -1. Otherwise, we return the index of the first character in the queue.
- The function correctly returns the expected outputs. 
- **In Example 01 :**
    - The first non-repeating character is 'l' at index 0. 
- **In Example 02 :**
    - The first non-repeating character is 'v' at index 2. 
- **In Example 03 :**
    - There are no non-repeating characters, so the function returns -1.