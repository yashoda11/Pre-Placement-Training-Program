function findLongestHarSubseq(nums) {
    let numCount = new Map();
    let maxLen = 0;
    for (let num of nums) {
      numCount.set(num, (numCount.get(num) || 0) + 1);
    }
    for (let [num, count] of numCount) {
      if (numCount.has(num + 1)) {
        let currLen = count + numCount.get(num + 1);
        maxLen = Math.max(maxLen, currLen);
      }
    }
    return maxLen;
  }
  let nums = [1, 3, 2, 2, 5, 2, 3, 7];
  console.log(`
  The Length of the longest harmonious subsequence is : ${findLongestHarSubseq(nums)}.
  `);
  