# **Assignment - 08**

## **Question - 05**

Given an array of characters chars, compress it using the following algorithm:
- Begin with an empty string s. 
- For each group of **consecutive repeating characters** in chars:
- If the group's length is 1, append the character to s.
- Otherwise, append the character followed by the group's length.
- The compressed string s **should not be returned separately**, but instead, be stored **in the input character array chars**. 
- Note that group lengths that are 10 or longer will be split into multiple characters in chars.
- After you are done **modifying the input array,** return *the new length of the array*.
- You must write an algorithm that uses only constant extra space.

**Example :**

**Input:** chars = ["a","a","b","b","c","c","c"]

**Output:** Return 6, and the first 6 characters of the input array should be: ["a","2","b","2","c","3"]

**Explanation:**
- The groups are "aa", "bb", and "ccc". This compresses to "a2b2c3".
- In this code, we use two pointers: writeIndex and i. The writeIndex keeps track of the index where the next character should be written in the compressed array, and i iterates through the original array.
- We also use a count variable to keep track of the consecutive count of the current character.
- We iterate through the original array starting from the first character. 
- If the current character is different from the next character or it's the last character, we write the current character to the compressed array at writeIndex. 
- If the count is greater than 1, we convert it to a string and write each digit of the count to the compressed array. Then we reset the count to 1.
- After iterating through the array, the compressed characters are stored in the original chars array up to writeIndex. We return writeIndex, which represents the new length of the compressed array.
- In the example usage, we compress the array ["a", "a", "b", "b", "c", "c", "c"] and store the compressed characters in the same array. 
The compressed length is 6, and we display the compressed characters using chars.slice(0, compressedLength). The output is ["a", "2", "b", "2", "c", "3"].





