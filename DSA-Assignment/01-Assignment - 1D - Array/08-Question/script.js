function findErrorNums(nums) {
    const numSet = new Set();
    let duplicate = -1;
    let missing = -1;
  
    for (const num of nums) {
      if (numSet.has(num)) {
        duplicate = num;
      } else {
        numSet.add(num);
      }
    }
  
    for (let i = 1; i <= nums.length; i++) {
      if (!numSet.has(i)) {
        missing = i;
        break;
      }
    }
  
    return [duplicate, missing];
  }
  
  // Example usage:
  const nums = [1, 2, 3, 4, 4];
  const result = findErrorNums(nums);
  console.log(result); // Output: [2, 3]
  