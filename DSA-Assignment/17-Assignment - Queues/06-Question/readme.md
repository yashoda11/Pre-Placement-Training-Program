# **Assignment Questions - 17**
## **Question - 06**

You are given an integer array **deck**. There is a deck of cards where every card has a unique integer. 
- The integer on the **ith** card is **deck[i]**.
- You can order the deck in any order you want. Initially, all the cards start face down (unrevealed) in one deck.
- You will do the following steps repeatedly until all cards are revealed:
    1. Take the top card of the deck, reveal it, and take it out of the deck.
    2. If there are still cards in the deck then put the next top card of the deck at the bottom of the deck.
    3. If there are still unrevealed cards, go back to step 1. Otherwise, stop.
- Return *an ordering of the deck that would reveal the cards in increasing order*.
- **Note :** that the first entry in the answer is considered to be the top of the deck.

**Example - 01 :**
```
Input : deck = [17,13,11,2,3,5,7]
Output : [2,13,3,11,5,17,7]
Explanation :
We get the deck in the order [17,13,11,2,3,5,7] (this order does not matter), and reorder it.
After reordering, the deck starts as [2,13,3,11,5,17,7], where 2 is the top of the deck.
We reveal 2, and move 13 to the bottom.  The deck is now [3,11,5,17,7,13].
We reveal 3, and move 11 to the bottom.  The deck is now [5,17,7,13,11].
We reveal 5, and move 17 to the bottom.  The deck is now [7,13,11,17].
We reveal 7, and move 13 to the bottom.  The deck is now [11,17,13].
We reveal 11, and move 17 to the bottom.  The deck is now [13,17].
We reveal 13, and move 17 to the bottom.  The deck is now [17].
We reveal 17.
Since all the cards revealed are in increasing order, the answer is correct.
```

**Example - 02 :**
```
Input: deck = [1,1000]
Output: [1,1000]
```

**Analysis :**
- The revealCardsInIncreasingOrder function takes in the deck array and performs the following steps:
    1. Sort the deck array in increasing order.
    2. Initialize an empty queue queue.
    3. Iterate over the sorted deck array in reverse order. For each card:
        - If the queue is not empty, move the bottom card to the top by popping the last element and unshifting it to the front of the queue.
        - Take the top card from the deck array and unshift it to the front of the queue.
    4. Return the final queue which represents the ordering of the deck that reveals the cards in increasing order.