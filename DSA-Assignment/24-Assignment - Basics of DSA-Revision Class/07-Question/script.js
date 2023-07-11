var maxSlidingWindow = function (nums, k) {
    const result = [];
    const deque = [];

    for (let i = 0; i < nums.length; i++) {

        while (deque.length > 0 && nums[i] >= nums[deque[deque.length - 1]]) {
            deque.pop();
        }

        deque.push(i);

        if (i - deque[0] >= k) {
            deque.shift();
        }

        if (i >= k - 1) {
            result.push(nums[deque[0]]);
        }
    }

    return result;

};



// Testing Examples :

// Example - 01 :

var nums = [1,3,-1,-3,5,3,6,7];
var k = 3;
console.log(`
Example - 01 :
For the given an Array of Integers (nums) is : [${nums}] and 
The Sliding Window of Size (K) is : ${k} ,
The Max Sliding Window is : [${maxSlidingWindow(nums, k)}] .
`);

// Example - 02 :

var nums = [1];
var k = 1;
console.log(`
Example - 02 :
For the given an Array of Integers (nums) is : [${nums}]  and 
The Sliding Window of Size (K) is : ${k} ,
The Max Sliding Window is : [${maxSlidingWindow(nums, k)}] .
`);