function isPowerOfThree(n) {
    if (n <= 0) {
      return false;
    }
  
    while (n % 3 === 0) {
      n /= 3;
    }
  
    return n === 1;
  }
  
  // Examples:

  //Example - 01 :
  var n = 27;
  console.log(isPowerOfThree(n));             // Output: true

  //Example - 02 :
  var n = 0;
  console.log(isPowerOfThree(n));           // Output: false

  //Example - 03 :
  var n = -1;
  console.log(isPowerOfThree(n));          // Output: false
  