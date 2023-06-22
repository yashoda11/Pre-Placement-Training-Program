var revealCardsInIncreasingOrder = function (deck) {
    deck.sort((a, b) => a - b); // Sort the deck in increasing order
    
    const queue = [];
    
    for (let i = deck.length - 1; i >= 0; i--) {
      if (queue.length > 0) {
        // Move the bottom card to the top
        const bottomCard = queue.pop();
        queue.unshift(bottomCard);
      }
      
      // Take the top card from the deck and put it on top of the queue
      const topCard = deck[i];
      queue.unshift(topCard);
    }
    
    return queue;
  }
 

// Testing Examples :

// Example - 01 :

var deck = [17,13,11,2,3,5,7];
console.log(`
The Ordering of the given Deck [${deck}] that would reveal the cards in the Increasing Order is : [${revealCardsInIncreasingOrder(deck)}] .
`);                                      // Output : [2,13,3,11,5,17,7]

// Example - 02 :

var deck = [1,1000];
console.log(`
The Ordering of the given Deck [${deck}] that would reveal the cards in the Increasing Order is : [${revealCardsInIncreasingOrder(deck)}] .
`);                                     // Output: [1,1000]