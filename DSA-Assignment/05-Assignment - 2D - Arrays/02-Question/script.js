function numberOfCompleteRows(n) {
    let completeRows = 0;
    let coins = 0;
    let i = 1;
  
    while (coins + i <= n) {
      coins += i;
      completeRows++;
      i++;
    }
  
    return completeRows;
  }
  
  let n = 5;
  console.log(`
  The Number of completed rows for the ${n} coins are : ${numberOfCompleteRows(n)}
  `);
  