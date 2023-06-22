class RecentCounter {
    constructor() {
      this.queue = []; // Initialize an empty queue to store the recent requests
    }
  
    ping(t) {
      const lowerBound = t - 3000; // Calculate the lower bound of the time range
  
      // Remove the requests that are outside the time range from the front of the queue
      while (this.queue.length > 0 && this.queue[0] < lowerBound) {
        this.queue.shift();
      }
  
      this.queue.push(t); // Add the new request timestamp to the back of the queue
  
      return this.queue.length; // Return the number of requests in the queue
    }
  }
  
// Example :

  const recentCounter = new RecentCounter();
  const result = [];
  
  result.push(null);
  result.push(recentCounter.ping(1));
  result.push(recentCounter.ping(100));
  result.push(recentCounter.ping(3001));
  result.push(recentCounter.ping(3002));
  
  console.log(result); // Output: [null, 1, 2, 3, 3]
  