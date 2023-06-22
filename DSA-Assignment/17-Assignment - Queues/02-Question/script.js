var maxSubarraySumCircular =  function (nums) {
    const n = nums.length;
  
    // Calculate the maximum sum using Kadane's algorithm
    function maxSubarraySum(nums) {
      let maxSum = -Infinity;
      let currentSum = 0;
  
      for (let i = 0; i < n; i++) {
        currentSum = Math.max(nums[i], currentSum + nums[i]);
        maxSum = Math.max(maxSum, currentSum);
      }
  
      return maxSum;
    }
  
    // Calculate the minimum sum using Kadane's algorithm
    function minSubarraySum(nums) {
      let minSum = Infinity;
      let currentSum = 0;
  
      for (let i = 0; i < n; i++) {
        currentSum = Math.min(nums[i], currentSum + nums[i]);
        minSum = Math.min(minSum, currentSum);
      }
  
      return minSum;
    }
  
    const maxSum = maxSubarraySum(nums);
    const minSum = minSubarraySum(nums);
  
    if (maxSum <= 0) {
      return maxSum;
    }
  
    const circularMaxSum = nums.reduce((acc, val) => acc + val, 0) - minSum;
  
    return Math.max(maxSum, circularMaxSum);
  };
  

//Examples :

//Example -01 :
var nums = [1,-2,3,-2];
console.log(`
The Maximum Possible Sum of a non-empty subarray of a given nums [${nums}] is : ${maxSubarraySumCircular(nums)}.
`);                                         // Output: 3

//Example -02 :
var nums = [5,-3,5];
console.log(`
The Maximum Possible Sum of a non-empty subarray of a given nums [${nums}] is : ${maxSubarraySumCircular(nums)}.
`);                                          // Output: 10

//Example -03 :
var nums = [-3,-2,-3];
console.log(`
The Maximum Possible Sum of a non-empty subarray of a given nums [${nums}] is : ${maxSubarraySumCircular(nums)}.
`);                                        // Output: -2
  