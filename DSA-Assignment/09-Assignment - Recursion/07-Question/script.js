function printPermutations(S) {
    const N = S.length;
    const visited = Array(N).fill(false);
    const permutation = Array(N);
    
    function generatePermutations(index) {
      if (index === N) {
        console.log(permutation.join(''));
        return;
      }
      
      for (let i = 0; i < N; i++) {
        if (!visited[i]) {
          visited[i] = true;
          permutation[index] = S[i];
          generatePermutations(index + 1);
          visited[i] = false;
        }
      }
    }
    
    generatePermutations(0);
  }
  
  // Example usage:
  printPermutations("ABC");
  printPermutations("XY");