function minNumberOfSteps(word1, word2) {
    const m = word1.length;
    const n = word2.length;
  
    // Create a 2D array to store the minimum steps
    const dp = Array.from({ length: m + 1 }, () => new Array(n + 1));
  
    // Initialize the first row and column
    for (let i = 0; i <= m; i++) {
      dp[i][0] = i;
    }
    for (let j = 0; j <= n; j++) {
      dp[0][j] = j;
    }
  
    // Fill in the remaining cells of the dp array
    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        if (word1.charAt(i - 1) === word2.charAt(j - 1)) {
          dp[i][j] = dp[i - 1][j - 1];
        } else {
          dp[i][j] = Math.min(dp[i - 1][j] + 1, dp[i][j - 1] + 1);
        }
      }
    }
  
    return dp[m][n];
  }
  const word1 = "sea";
  const word2 = "eat";
  console.log(minNumberOfSteps(word1, word2));