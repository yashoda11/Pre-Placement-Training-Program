function printSubsets(set, subset = '', index = 0) {
    var n = set.length;
  
    // Base case: when index reaches the end of the set
    if (index === n) {
      console.log('"' + subset + '"');
      return;
    }
  
    // Recursive case 1: exclude the current character at index
    printSubsets(set, subset, index + 1);
  
    // Recursive case 2: include the current character at index
    printSubsets(set, subset + set[index], index + 1);
  }
  
  // Example usage
  var set = 'abc';
  console.log('The Subsets of "' + set + '":');
  printSubsets(set);
  
  console.log(); // Print a new line
  
  var set = 'abcd';
  console.log('The Subsets of "' + set + '":');
  printSubsets(set);
  