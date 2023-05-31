function minimumScore(nums, k) {
    let minScore = Infinity;
  
    for (let i = 0; i < nums.length; i++) {
      const minValue = Math.max(nums[i] - k, Math.min(...nums));
      const maxValue = Math.min(nums[i] + k, Math.max(...nums));
      const score = maxValue - minValue;
  
      minScore = Math.min(minScore, score);
    }
  
    return minScore;
  }
  const nums = [1];
  const k = 0;
  console.log(minimumScore(nums, k));
  