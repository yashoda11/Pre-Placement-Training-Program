var multiply = function(mat1, mat2) {
    const m = mat1.length;
    const k = mat1[0].length;
    const n = mat2[0].length;
    
    const result = new Array(m).fill(0).map(() => new Array(n).fill(0));
    
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < k; j++) {
        if (mat1[i][j] !== 0) {
          for (let k = 0; k < n; k++) {
            result[i][k] += mat1[i][j] * mat2[j][k];
          }
        }
      }
    }
    
    return result;
  };
  
  var mat1 = [[1, 0, 0], [-1, 0, 3]];
  var mat2 = [[7, 0, 0], [0, 0, 0], [0, 0, 1]];
  console.log(`The Multiplication of given two sparse matrices is :`);
  console.log(multiply(mat1, mat2));
  