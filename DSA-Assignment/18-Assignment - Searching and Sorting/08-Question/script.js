function find132pattern(nums) {
    const n = nums.length;
    const stack = [];
    let maxK = -Infinity;
  
    for (let i = n - 1; i >= 0; i--) {
      if (nums[i] < maxK) {
        return  `The given array nums [${nums}] elements, there is a 132 pattern in it. \nHence True.`;
      }
  
      while (stack.length > 0 && nums[i] > stack[stack.length - 1]) {
        maxK = stack.pop();
      }
  
      stack.push(nums[i]);
    }
  
    return `The given array nums [${nums}] elements, there is no 132 pattern in it. \nHence Flase.`;
  }
  

// Testing Examples :

// Example - 01 :
  var nums = [1, 2, 3, 4];
  console.log(find132pattern(nums));                          // Output: false
  

// Example - 02 :
  var nums = [3, 1, 4, 2];
  console.log(find132pattern(nums));                          // Output: true
  

// Example - 03 :
  var nums = [-1, 3, 2, 0];
  console.log(find132pattern(nums));                          // Output: true
  