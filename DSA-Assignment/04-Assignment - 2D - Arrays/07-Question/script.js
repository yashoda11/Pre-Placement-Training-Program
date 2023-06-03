function maxCount(m, n, ops) {
    let minRow = m;
    let minCol = n;
  
    for (let [ai, bi] of ops) {
      minRow = Math.min(minRow, ai);
      minCol = Math.min(minCol, bi);
    }
  
    return `
    The number of maximum integers in the matrix after performing all the operations are : ${minRow * minCol}
    `;
  }
  
  let m = 3;
  let n = 3;
  let ops = [[2, 2], [3, 3]];
  console.log(maxCount(m, n, ops));
  