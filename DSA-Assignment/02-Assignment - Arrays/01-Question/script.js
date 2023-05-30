var arrayPairMaxPossibleSum = function(nums) {
    console.log(`OUTPUT: \nThe given Array is: [${nums}]`);
    nums.sort((a, b) => a - b);
    let sum = 0;  
    for(let i = 0; i < nums.length; i += 2) {
        sum += nums[i];
    }
    return `The Maximum Possible Sum for the given array is: ${sum}`;
};
console.log(arrayPairMaxPossibleSum([1,4,3,2]));