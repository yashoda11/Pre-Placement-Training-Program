var singleNumber = function(nums) {

    if (nums.length===1) {
        return nums[0]
    }

    let result = 0;

    nums.forEach(element => {
        result = result ^ element
    });

    return `
    In the given array numbers [${nums}] , The Single (Non-Duplicate) Number  is : ${result}
    `;

 };
var nums = [2, 2, 1];
console.log(singleNumber(nums));
