var findTheWinner = function (n, k) {
    const queue = [];
    
    // Initialize the queue with friends numbered from 1 to n
    for (let i = 1; i <= n; i++) {
      queue.push(i);
    }
    
    while (queue.length > 1) {
      // Count k friends clockwise and remove the last counted friend
      for (let i = 1; i < k; i++) {
        queue.push(queue.shift());
      }

      queue.shift(); // Remove the last counted friend
    }
    
    return queue[0]; // Return the winner
  };
 
  
// Testing Examples :

//Example -01 :

var n = 5;
var k = 2;
console.log(`
The Given Number of Friends (n) is ${n} and an integer (k) is ${k} , The Winner of the Game is : ${findTheWinner(n, k)} .
`);                                             // Output: 3

//Example -02 :

var n = 6;
var k = 5;
console.log(`
The Given Number of Friends (n) is ${n} and an integer (k) is ${k} , The Winner of the Game is : ${findTheWinner(n, k)} .
`);                                         // Output: 1