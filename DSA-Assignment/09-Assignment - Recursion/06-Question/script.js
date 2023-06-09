var findNthTerm = function (a, d, N) {
    if (N === 1) {
      return a;
    }
    
    return findNthTerm(a, d, N - 1) + d;
  }
  
// Examples :

// Example - 01 :
var a = 2;
var d = 1;
var N = 5;
console.log(`
The ${N}th term of the series is : ${findNthTerm(a, d, N)}.
`);                                                           // Output: 6

// Example - 02 :
var a = 5;
var d = 2;
var N = 10;
console.log(`
The ${N}th term of the series is : ${findNthTerm(a, d, N)}.
`);                                                          // Output: 23