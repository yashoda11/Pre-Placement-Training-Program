# **Assignment Questions - 17**
## **Question - 04**

You have a `RecentCounter` class which counts the number of recent requests within a certain time frame.
- Implement the `RecentCounter` class:
    - `RecentCounter()` Initializes the counter with zero recent requests.
    - `int ping(int t)` Adds a new request at time `t`, where `t` represents some time in milliseconds, and returns the number of requests that has happened in the past `3000` milliseconds (including the new request). Specifically, return the number of requests that have happened in the inclusive range `[t - 3000, t]`.
- It is **guaranteed** that every call to `ping` uses a strictly larger value of `t` than the previous call.

**Example :**
```
Input :
["RecentCounter", "ping", "ping", "ping", "ping"]
[[], [1], [100], [3001], [3002]]
Output :
[null, 1, 2, 3, 3]
Explanation :
RecentCounter recentCounter = new RecentCounter();
recentCounter.ping(1);     // requests = [1], range is [-2999,1], return 1
recentCounter.ping(100);   // requests = [1,100], range is [-2900,100], return 2
recentCounter.ping(3001);  // requests = [1,100,3001], range is [1,3001], return 3
recentCounter.ping(3002);  // requests = [1,100,3001,3002], range is [2,3002], return 3
```

**Analysis :**
1. The RecentCounter class is implemented using the ES6 class syntax. It has a constructor method that initializes the class with an empty queue.
2. The ping method takes a timestamp t as input and adds the new request to the queue. It also returns the number of requests that have occurred in the past 3000 milliseconds.
3. Inside the ping method, we calculate the lower bound of the time range by subtracting 3000 milliseconds from the current timestamp (t - 3000).
4. We then iterate through the queue from the front and remove any requests that are outside the time range. We do this by checking if the timestamp at the front of the queue is less than the lower bound (this.queue[0] < lowerBound). If it is, we remove the timestamp from the front of the queue using the shift method.
5. After removing the old requests, we add the new request timestamp t to the back of the queue using the push method.
6. Finally, we return the length of the queue, which represents the number of requests within the past 3000 milliseconds.