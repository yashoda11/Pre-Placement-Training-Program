var sumOfNTo1 = function (n) {

    if ( n == 1)
     return 1;
    
     return n + sumOfNTo1(n - 1);
};


//Examples :

// Example - 01 :
var n = 3;
console.log(`
The Sum of the first ${n} natural numbers  are : ${sumOfNTo1(n)} .
`);                                                                 // Output : 6

// Example - 02 :
var n = 5;
console.log(`
The Sum of the first ${n} natural numbers are : ${sumOfNTo1(n)} .

`  );                                                              // Output : 15