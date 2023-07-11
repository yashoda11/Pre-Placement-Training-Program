# **Assignment Questions - 24**
## **Question - 06**
## **Top K Frequent Words :**

Given an array of strings `words` and an integer `k`, return *the* `k` *most frequent strings*.
- Return the answer **sorted** by **the frequency** from highest to lowest. 
- Sort the words with the same frequency by their **lexicographical order**.

**Example - 01 :**
```
Input : words = ["i","love","leetcode","i","love","coding"], k = 2

Output : ["i","love"]

Explanation : 
"i" and "love" are the two most frequent words.
- Note that "i" comes before "love" due to a lower alphabetical order.
```

**Example - 02 :**
```
Input : words = ["the","day","is","sunny","the","the","the","sunny","is","is"], k = 4

Output : ["the","is","sunny","day"]

Explanation : 
"the", "is", "sunny" and "day" are the four most frequent words, with the number of occurrence being 4, 3, 2 and 1 respectively.
```

**Constraints :**

- 1 <= words.length <= 500.
- 1 <= words[i].length <= 10.
- `words[i]` consists of lowercase English letters.
- `k` is in the range `[1, The number of **unique** words[i]]`


**Explanation :**
- The code uses a Map data structure to count the frequency of each word in the words array. 
- It then converts the keys of the frequencyMap into an array sortedWords and sorts it based on the frequency of the words and their lexicographical order.
- The sortedWords array is sorted using a custom comparison function in the sort() method. 
- This function first compares the frequencies of the words. 
- If the frequencies are the same, it compares the words lexicographically using the localeCompare() method.
- Finally, the code returns the first k elements of the sortedWords array, which represent the k most frequent words.

**Time Complexity :** 
- The code has a **Time Complexity** of **O(n log n)**, where n is the length of the input array words. 
- This is because the code constructs a frequency map in O(n) time, and then sorts the words based on their frequency and lexicographical order in O(n log n) time.

**Space Complexity :** 
- The **Space Complexity** is **O(n)** since the code uses a Map data structure to store the frequency of the words. 
- In the **worst case**, where all words are unique, the frequencyMap can contain **n** entries.