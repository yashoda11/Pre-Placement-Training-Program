var factorialOfNumber = function (N) {

    if ( (N == 0) || (N == 1) ) 
        return 1;

    return N*factorialOfNumber(N-1);

};

// Examples : 

// Example - 01 :

var N = 5;
console.log(`
The Factorial of a given Positive integer ${N} is : ${factorialOfNumber(N)} .
`);                                                                          //  Output - 120


// Example - 02 :

var N = 4;
console.log(`
The Factorial of a given Positive integer ${N} is : ${factorialOfNumber(N)} .
`);                                                                           //  Output - 24