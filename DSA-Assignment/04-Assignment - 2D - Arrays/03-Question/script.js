function transpose(matrix) {
    const R = matrix.length;
    const C = matrix[0].length;
    const ans = new Array(C).fill(0).map(() => new Array(R));
    for (let r = 0; r < R; ++r) {
        for (let c = 0; c < C; ++c) {
            ans[c][r] = matrix[r][c];
        }
    }
    return ans;
}

var matrix = [[1,2,3],[4,5,6],[7,8,9]];
console.log("The given Matrix is :");
console.log(matrix);
console.log("The Transpose of given matrix is :");
console.log(transpose(matrix));