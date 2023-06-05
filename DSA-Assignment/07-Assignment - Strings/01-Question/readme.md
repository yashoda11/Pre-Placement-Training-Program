# **Assignment - 07**
## **Question - 01**

Given two strings s and t, determine if they are isomorphic.
- Two strings s and t are isomorphic if the characters in s can be replaced to get t.
- All occurrences of a character must be replaced with another character while preserving the order of characters.
- No two characters may map to the same character, but a character may map to itself.

**Example :**

**Input :** s = "egg", t = "add"

**Output :** true

**Explanation :**
- To determine if two strings, s and t, are isomorphic, we need to check if there is a consistent mapping between the characters in s and t.
- Here's the step-by-step process to solve this problem:
- **Algorithm**:
    1. Initialize two empty maps, sToT and tToS, to track the mapping from s to t and from t to s, respectively.
    2. Iterate through each character sChar in s and the corresponding character tChar in t.
    3. Check if sChar is already mapped to a character other than tChar in sToT map, or if tChar is already mapped to a character other than sChar in tToS map. If either of these conditions is true, return false because the mapping is inconsistent.
    4. If sChar is not present in the sToT map and tChar is not present in the tToS map, create a mapping from sChar to tChar in sToT and from tChar to sChar in tToS.
    5. After iterating through all characters, return true as the strings s and t are isomorphic.
- The code first checks if the lengths of the strings s and t are equal. 
- If they are not equal, it returns false since the strings cannot be isomorphic.
- Then, it initializes two maps, sToT and tToS, to store the character mappings.
- The code iterates through each character of s and t simultaneously. 
- For each pair of characters, it checks if the characters are already mapped to different characters in the maps. 
- If they are, it returns false since the mapping is inconsistent.
- If the characters are not present in the maps, it creates a new mapping from sChar to tChar in sToT and from tChar to sChar in tToS.
- After iterating through all characters, it returns true since the strings s and t are isomorphic.
- For the given input s = "egg" and t = "add", the output will be true since the characters in s can be replaced to get t while preserving the order of characters.