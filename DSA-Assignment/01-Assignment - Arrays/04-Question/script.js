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
console.log(`
After Incrementing the Array [1,2,3], 
The Output is : [${plusOne([1,2,3])}]`
);