# **Assignment - 08**

## **Question - 06**

Given two strings s and p, return *an array of all the start indices of* p*'s anagrams in* s. 
- You may return the answer in **any order**.
- An **Anagram** is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

**Example :**

**Input :** s = "cbaebabacd", p = "abc"

**Output :** [0,6]

**Explanation :**
- The substring with start index = 0 is "cba", which is an anagram of "abc".
- The substring with start index = 6 is "bac", which is an anagram of "abc".
- In this code, we define three helper functions: getCharFrequency, isAnagram, and findAnagrams.
- The getCharFrequency function takes a string str and returns an array representing the frequency of characters in str. 
- It uses the ASCII value of each character to determine the index in the array.
- The isAnagram function compares two character frequency arrays freq1 and freq2 and returns true if they are equal (representing an anagram) and false otherwise.
- The findAnagrams function is the main function that finds all the start indices of p's anagrams in s. 
- It uses a sliding window approach with two pointers windowStart and windowEnd. 
- The windowFreq array keeps track of the frequency of characters in the current window.
- We iterate through s using the windowEnd pointer. 
- For each character, we increment its frequency in the windowFreq array. If the window size becomes equal to the length of p, we check if the frequencies in the windowFreq array match the frequencies in the targetFreq array (obtained from p) using the isAnagram function. 
- If they match, we add the windowStart index to the result array.
- After checking the anagram condition, we slide the window by decrementing the frequency of the character at the windowStart index and incrementing the windowStart pointer.
- Finally, we return the result array containing the start indices of p's anagrams in s.
- In the example usage, we find the start indices of p's anagrams in s, where s = "cbaebabacd" and p = "abc". The output is [0, 6], indicating that the substrings "cba" and "bac" are anagrams of "abc" and start at indices 0 and 6 in s, respectively.