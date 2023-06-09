var exponentOfNumber = function (N, P) {
    if (P === 0) {
      return 1;
    }
    
    return N * exponentOfNumber(N, P - 1);
  }
  
// Examples :

// Example : - 01:
  var N = 5;
  var P = 2;
  console.log(`
  The Exponent of the Number ${N} raised to the given Power ${P} is : ${exponentOfNumber(N, P)} .
  `);                           // Output: 25

// Example : - 02:
  var N = 2;
  var P = 5;
  console.log(`
  The Exponent of the Number ${N} raised to the given Power ${P} is : ${exponentOfNumber(N, P)} .
  `);                                   // Output: 32
  