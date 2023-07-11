# **Assignment Questions - 24**
## **Question - 02**
## **Roman to Integer :**

Roman numerals are represented by seven different symbols : `I`, `V`, `X`, `L`, `C`, `D` and `M`.

```
Symbol      Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
```

**Example :**
- For example, `2` is written as `II` in Roman numeral, just two ones added together. 
- `12` is written as `XII`, which is simply `X + II`. 
- The number `27` is written as `XXVII`, which is `XX + V + II`.
- Roman numerals are usually written largest to smallest from left to right. 
- However, the numeral for four is not `IIII`. 
- Instead, the number four is written as `IV`. Because the one is before the five we subtract it making four. 
- The same principle applies to the number nine, which is written as `IX`. 
- There are six instances where subtraction is used:
    - `I` can be placed before `V` (5) and `X` (10) to make 4 and 9.
    - `X` can be placed before `L` (50) and `C` (100) to make 40 and 90.
    - `C` can be placed before `D` (500) and `M` (1000) to make 400 and 900.

- Given a roman numeral, convert it to an integer.

**Example - 01 :**
```
Input : s = "III"
Output : 3
Explanation : III = 3.
```

**Example - 02 :**
```
Input : s = "LVIII"
Output : 58
Explanation : L = 50, V= 5, III = 3.
```

**Constraints :**
- 1 <= s.length <= 15.
- s contains only the characters `('I', 'V', 'X', 'L', 'C', 'D', 'M').
- It is **guaranteed** that `s` is a valid roman numeral in the range `[1, 3999].

**Explanation :**
- The code uses a mapping object romanValues to store the corresponding values for each Roman numeral symbol. 
- It then iterates through the input string s from right to left, starting with the last character.
- During the iteration, it compares the current symbol's value with the previous symbol's value. 
    - If the current value is greater than or equal to the previous value, it adds it to the result.
    - Otherwise, it subtracts it from the result. 
    - This logic handles the cases where subtraction is needed for numerals like IV (4) or IX (9).
- Finally, the code returns the computed result.

**Time Complexity :**
- The code has a **Time Complexity** of **O(n)**, where n is the length of the input string s. 
- This is because it iterates through the string once, performing constant-time operations for each character.

**Space Complexity :** 
- The **Space Complexity** is **O(1)** since the code uses a fixed-size mapping object romanValues, and the additional variables used for computation take constant space regardless of the input size.