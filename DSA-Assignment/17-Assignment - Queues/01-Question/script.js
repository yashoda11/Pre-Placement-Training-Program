function findFirstNonRepeatingChar(s) {
    const queue = [];
    const charCount = {};
  
    for (let i = 0; i < s.length; i++) {
      const char = s[i];
      if (!charCount[char]) {
        charCount[char] = 1;
        queue.push({ char, index: i });
      } else {
        charCount[char]++;
        while (queue.length > 0 && charCount[queue[0].char] > 1) {
          queue.shift();
        }
      }
    }
  
    return queue.length > 0 ? queue[0].index : -1;
  }

// Examples :

// Example - 01 :
var s = "leetcode";
console.log(`
The First Non-Repeating Character in the given a string "${s}" at the index of : ${findFirstNonRepeatingChar(s)} .
`);                     // Output: 0
  
// Example - 02 :
var s = "loveleetcode";
console.log(`
The First Non-Repeating Character in the given a string "${s}" at the index of : ${findFirstNonRepeatingChar(s)} .
`);                                 // Output: 2

// Example - 03 :
var s = "aabb";
console.log(`
The First Non-Repeating Character in the given a string "${s}" at the index of : ${findFirstNonRepeatingChar(s)} .
`);                                       // Output: -1