function countWordsLeft(sequence) {
    const stack = [];
  
    for (let word of sequence.split(" ")) {
      if (stack.length > 0 && stack[stack.length - 1] === word) {
        stack.pop(); // Destroy the similar words
      } else {
        stack.push(word); // Push non-similar word to the stack
      }
    }
  
    return stack.length;
  }
  
  // Example usage:
  const sequence1 = "ab aa aa bcd ab";
  const sequence2 = "tom jerry jerry tom";
  
  console.log(`
  The Number of Words left in the given sequence 1 "${sequence1}" after pairwise destruction is : ${countWordsLeft(sequence1)} .
  `);
  console.log(`
  The Number of Words left in the given sequence 2 "${sequence2}" after pairwise destruction is : ${countWordsLeft(sequence2)} .
  `);