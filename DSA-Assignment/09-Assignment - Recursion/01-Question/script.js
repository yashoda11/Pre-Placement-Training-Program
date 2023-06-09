var isPowerOfTwo =  function (n) {
    if (n === 1) {
      return true;
    }
    
    if ((n % 2 === 0) && (n > 1)) {
      return isPowerOfTwo(n / 2);
    }
    
    return false;
  }
  

  // Example usage:
 //  Example - 01 :
  var n = 1;
  console.log(isPowerOfTwo(n));  // Output: true

 //  Example - 02 :
  var n = 16;
  console.log(isPowerOfTwo(n)); // Output: true

 //  Example - 03 :
  var n = 3;
  console.log(isPowerOfTwo(n));  // Output: false
  