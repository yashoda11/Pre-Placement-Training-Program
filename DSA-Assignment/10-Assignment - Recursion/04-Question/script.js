function calculateStringLength(str) {
    // Base case: when the string is empty
    if (str === '') {
      return 0;
    }
  
    // Recursive case: remove the first character and recursively calculate the length of the remaining string
    return 1 + calculateStringLength(str.slice(1));
  }
  
  // Examples :
  
  // Example - 01 :
  var str = 'abcd';
  console.log('The Length of the String "' + str + '" is :', calculateStringLength(str));

  // Example - 02 :
  var str = 'GEEKSFORGEEKS';
  console.log('The Length of the String "' + str + '" is :', calculateStringLength(str));