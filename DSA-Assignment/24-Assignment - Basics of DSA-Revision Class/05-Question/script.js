var nthUglyNumber = function (n) {
    const uglyNumbers = [1];
    let p2 = 0;
    let p3 = 0;
    let p5 = 0;

    for (let i = 1; i < n; i++) {
        const nextUgly = Math.min(
            uglyNumbers[p2] * 2,
            uglyNumbers[p3] * 3,
            uglyNumbers[p5] * 5
        );

        uglyNumbers.push(nextUgly);

        if (nextUgly === uglyNumbers[p2] * 2) {
            p2++;
        }
        if (nextUgly === uglyNumbers[p3] * 3) {
            p3++;
        }
        if (nextUgly === uglyNumbers[p5] * 5) {
            p5++;
        }
    }

    return uglyNumbers[n - 1];

};



// Testing Examples :

// Example - 01 :

var n = 10;
console.log(`
Example - 01 :
For the Given an Integer (n) is : ${n} ,
The ${n}th (nth) Ugly Numbers is : ${nthUglyNumber(n)} .
`);

// Example - 02 :

var n = 1;
console.log(`
Example - 02 :
For the Given an Integer (n) is : ${n} ,
The ${n}th (nth) Ugly Numbers is : ${nthUglyNumber(n)} .
`);