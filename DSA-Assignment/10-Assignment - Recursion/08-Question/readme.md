# **Assignment - 10**

## **Question - 08**

Given a string, count total number of consonants in it. A consonant is an English alphabet character that is not vowel (a, e, i, o and u). Examples of constants are b, c, d, f, and g.

**Examples - 01 :**

**Input :** abc de

**Output :** 3
- There are three consonants b, c and d.

**Examples - 02 :**

**Input :** geeksforgeeks portal

**Output :** 12
- There are 12 consonants g,k,s,f,r,g,k,s,p,r,t,l.


**Explanation :**
- In this code, the isConsonant function takes a character char and checks if it is a consonant. It compares the character to the valid English alphabet range (a to z) and verifies that it is not present in the vowels array.
- The countConsonants function is a recursive function that counts the number of consonants in a string. It takes the input string str as a parameter. The base case is when the string is empty, in which case it returns 0.
- In the recursive case, the function checks if the first character of the string is a consonant using the isConsonant function. If it is, it adds 1 to the count. Then, it recursively calls itself with the remaining substring (str.slice(1)) and adds the result of the recursive call.
- The function continues to recurse until it reaches the base case, and then it starts unwinding the recursion, adding up the counts as it returns from each recursive call.
- In the example above, we count the number of consonants in the string 'geeksforgeeks portal' using recursion and print the result, which is 12.