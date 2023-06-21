# **Assignment Questions - 16**
## **Question - 07**

Given a sequence of n strings, the task is to check if any two similar words come together and then destroy each other then print the number of words left in the sequence after this pairwise destruction.

**Example - 01 :**
```
Input : ab aa aa bcd ab
Output : 3
Explanation :
As aa, aa destroys each other so, ab bcd ab is the new sequence.
```

**Example - 02 :**
```
Input :  tom jerry jerry tom
Output : 0
Explanation :
As first both jerry will destroy each other. 
Then sequence will be tom, tom they will also destroy each other. 
So, the final sequence doesn’t contain any word.
```

**Analysis :**
- To check if any two similar words come together and destroy each other, we can use a stack. 
    1. The countWordsLeft() function takes a sequence of words as input.
    2. We initialize an empty stack.
    3. We split the sequence into individual words using the space character as the delimiter.
    4. For each word in the sequence, we compare it with the topmost word in the stack (if the stack is not empty). If the two words are similar, they destroy each other by popping the topmost word from the stack. Otherwise, we push the non-similar word to the stack.
    5. After processing all the words in the sequence, the stack will contain the words that were not destroyed.
    6. We return the length of the stack, which represents the number of words left in the sequence after pairwise destruction.
    7. We demonstrate the usage of the code by providing two example sequences and printing the number of words left in each sequence.