var plusOne = function (digits) {
    for (let i = digits.length - 1; i >= 0; --i) {
        ++digits[i];
        digits[i] %= 10;
        if (digits[i] != 0) {
            return digits;
        }
    }
    return [1, ...digits];
};
var digits = [1, 2, 3];
console.log(`
    After Incrementing the given array [${digits}] by one , 
    The Output is : [${plusOne(digits)}]
`);