var maximumGap = function (nums) {
    const n = nums.length;
    
    if (n < 2) {
      return 0;
    }
  
    nums.sort((a, b) => a - b);
  
    let maxDifference = 0;
  
    for (let i = 0; i < n - 1; i++) {
      const difference = nums[i + 1] - nums[i];
      maxDifference = Math.max(maxDifference, difference);
    }
  
    return maxDifference;

  };


// Testing Examples :

// Example - 01 :
  var nums = [3, 6, 9, 1];
  console.log(`The Maximum difference between two successive elements in its sorted form of the given array nums [${nums}] is : ${maximumGap(nums)}
    `);                                                // Output: 3
  
  // Example - 02 :
  var nums = [10];
  console.log(`The Maximum difference between two successive elements in its sorted form of the given array nums [${nums}] is : ${maximumGap(nums)}
  `);                                                   // Output: 0