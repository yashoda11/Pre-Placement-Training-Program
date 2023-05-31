var findIndexOfTargetedArrayNumber = function( nums , target ) { 

    for ( let i = 0; i < nums.length; i++ ) {
        if ( nums[i] == target ) {
            return `
            The Target ${target} exists in the given array of numbers [${nums}] and its index is at ${i}.
            `;
        }
    }
    return -1;
}
var nums = [-1,0,3,5,9,12];
var target = 9;
console.log(findIndexOfTargetedArrayNumber(nums , target));;