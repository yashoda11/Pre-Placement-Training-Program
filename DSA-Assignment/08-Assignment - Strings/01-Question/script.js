function lowestASCIISumPossible(s1, s2) {
    const m = s1.length;
    const n = s2.length;
  
    // Create a 2D array to store the minimum ASCII sum
    const dp = Array.from({ length: m + 1 }, () => new Array(n + 1));
  
    // Initialize the first row and column
    dp[0][0] = 0;
    for (let i = 1; i <= m; i++) {
      dp[i][0] = dp[i - 1][0] + s1.charCodeAt(i - 1);
    }
    for (let j = 1; j <= n; j++) {
      dp[0][j] = dp[0][j - 1] + s2.charCodeAt(j - 1);
    }
  
    // Fill in the remaining cells of the dp array
    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        if (s1.charAt(i - 1) === s2.charAt(j - 1)) {
          dp[i][j] = dp[i - 1][j - 1];
        } else {
          dp[i][j] = Math.min(
            dp[i - 1][j] + s1.charCodeAt(i - 1),
            dp[i][j - 1] + s2.charCodeAt(j - 1)
          );
        }
      }
    }
  
    return dp[m][n];
  }
  
  const s1 = "sea";
  const s2 = "eat";
  console.log(lowestASCIISumPossible(s1, s2));
  