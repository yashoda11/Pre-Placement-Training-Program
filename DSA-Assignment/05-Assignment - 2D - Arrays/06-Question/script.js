function findDuplicates(nums) {
    const result = [];
  
    for (let num of nums) {
      const i = Math.abs(num) - 1;
      if (nums[i] < 0) {
        result.push(Math.abs(num));
      } else {
        nums[i] *= -1;
      }
    }
  
    return result;
  }
  const nums = [4, 3, 2, 7, 8, 2, 3, 1];
  console.log(`
  The Duplicate Numbers present in the given array [${nums}] are : [${findDuplicates( nums )}].
  `);
  