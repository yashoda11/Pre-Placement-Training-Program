var lengthOfLongeststrictlyIncreasingSubsequence = function (nums) {
    const n = nums.length;
    if (n === 0) {
      return 0;
    }
  
    const dp = Array(n).fill(1);
    let maxLength = 1;
  
    for (let i = 1; i < n; i++) {
      for (let j = 0; j < i; j++) {
        if (nums[i] > nums[j]) {
          dp[i] = Math.max(dp[i], dp[j] + 1);
        }
      }
      maxLength = Math.max(maxLength, dp[i]);
    }
  
    return `The given array num [${nums}] elements, \nThe Length of the Longest Strictly Increasing Subsequence is : ${maxLength} .`;
  };
  
  
// Testing Examples :

// Example - 01 :
  var nums = [10, 9, 2, 5, 3, 7, 101, 18];
  console.log("\nExample - 01 :");
  console.log(lengthOfLongeststrictlyIncreasingSubsequence(nums));                           // Output: 4
  

// Example - 02 :
  var nums = [0, 1, 0, 3, 2, 3];
  console.log("\nExample - 02 :");
  console.log(lengthOfLongeststrictlyIncreasingSubsequence(nums));                           // Output: 4
  

// Example - 03 :
  var nums = [7, 7, 7, 7, 7, 7, 7];
  console.log("\nExample - 03 :");
  console.log(lengthOfLongeststrictlyIncreasingSubsequence(nums));                           // Output: 1