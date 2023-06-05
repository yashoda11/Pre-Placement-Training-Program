var findMaxLength = function(nums) {
    const map = new Map();
    let maxLen = 0;
    let count = 0;
    
    // Initialize the map with an initial count of 0 at index -1
    map.set(0, -1);
  
    for (let i = 0; i < nums.length; i++) {
      // Increment the count by 1 for 1 and decrement by 1 for 0
      count += nums[i] === 1 ? 1 : -1;
      
      // If the current count has been seen before, update the maximum length
      if (map.has(count)) {
        maxLen = Math.max(maxLen, i - map.get(count));
      } else {
        // If the current count is not in the map, add it with the current index
        map.set(count, i);
      }
    }
  
    return `
    The maximum length of a contiguous subarray with an equal number of 0 and 1 is : ${maxLen}
    `;
  };
  
  var nums = [0, 1];
  console.log(findMaxLength(nums));
  