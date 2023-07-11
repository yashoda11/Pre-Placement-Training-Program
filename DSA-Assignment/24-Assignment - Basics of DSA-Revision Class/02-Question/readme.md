# **Assignment Questions - 24**
## **Question - 02**
## **Longest Substring Without Repeating Characters :**

Given a string `s`, find the length of the **longest substring** without repeating characters.

**Example - 01 :**
```
Input : s = "abcabcbb"
Output : 3
Explanation : 
The answer is "abc", with the length of 3.
```

**Example - 02 :**
```
Input : s = "bbbbb"
Output : 1
Explanation : 
The answer is "b", with the length of 1.
```

**Example - 03 :**
```
Input : s = "pwwkew"
Output : 3
Explanation : 
- The answer is "wke", with the length of 3.
- Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
```

**Constraints :**
- 0 <= s.length <= 50000.
- s consists of English letters, digits, symbols and spaces.

**Explanation :**
- The code uses a sliding window approach to find the longest substring without repeating characters. 
- It maintains a start pointer that represents the start index of the current substring, and an end pointer that iterates through the string s.
- It also uses an object charMap to store the most recent index of each character encountered in the substring. 
- If a character is already present in the charMap and its index is greater than or equal to the start pointer, it means that the character is repeating in the current substring. 
- In that case, the start pointer is updated to the next index of the repeating character, effectively shifting the window to exclude the repeating character.
- The length of the current substring is calculated as end - start + 1, and the maximum length seen so far is updated if necessary.
- Finally, the code returns the maxLength, which represents the length of the longest substring without repeating characters.

**Time Complexity :** 
- The code has a **Time Complexity** of **O(n)**, where n is the length of the input string s. 
- This is because it iterates through the string once with the end pointer, and at each iteration, it performs constant-time operations.

**Space Complexity :** The **Space Complexity** is **O(min(m, n))**, where m is the size of the character set (number of unique characters) and n is the length of the input string s. 
- In the **worst case**, when all characters in s are unique, the space required for charMap can be up to m. 
- However, since the character set is limited to English letters, digits, symbols, and spaces, m is a constant and can be considered as O(1) space.