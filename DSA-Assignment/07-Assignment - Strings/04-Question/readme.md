# **Assignment - 07**
## **Question 4**

Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

**Example :**

**Input :** s = "Let's take LeetCode contest"

**Output :** "s'teL ekat edoCteeL tsetnoc"

**Explanation :**
- To reverse the order of characters in each word within a sentence, while preserving whitespace and the initial word order, we can split the sentence into individual words, reverse each word, and then join them back together.
- Here's the step-by-step process to solve this problem:
- **Algorithm :**
    1. Split the input string s into an array of words using the space character as the delimiter.
    2. Iterate through each word in the array.
    3. For each word, split it into an array of characters.
    4. Reverse the order of characters in the word.
    5. Join the characters back together to form the reversed word.
    6. Join the reversed words back together using the space character as the separator to form the final result.
- The code splits the input string s into an array of words using the space character as the delimiter. 
- It then iterates through each word and reverses the order of characters in each word using the split, reverse, and join array methods. 
- Finally, it joins the reversed words back together using the space character as the separator to form the final result.
- For the given input s = "Let's take LeetCode contest", the output will be "s'teL ekat edoCteeL tsetnoc", which is the original sentence with the order of characters in each word reversed.