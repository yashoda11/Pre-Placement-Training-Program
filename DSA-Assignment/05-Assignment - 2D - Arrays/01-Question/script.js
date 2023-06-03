function convert1DTo2D(original, m, n) {
    if (original.length !== m * n) {
      return [];
    }
    const result = [];
    let index = 0;
    for (let i = 0; i < m; i++) {
      const row = [];
      for (let j = 0; j < n; j++) {
        row.push(original[index]);
        index++;
      }
      result.push(row);
    }
    return result;
  }
  const original = [1, 2, 3, 4];
  const m = 2;
  const n = 2;
  console.log(convert1DTo2D(original, m, n));