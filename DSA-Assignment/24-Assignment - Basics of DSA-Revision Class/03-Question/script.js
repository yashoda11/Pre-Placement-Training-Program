var majorityElement = function (nums) {

    let count = 0;
    let majority = null;

    for (let i = 0; i < nums.length; i++) {

        if (count === 0) {
            majority = nums[i];
            count++;
        } else if (nums[i] === majority) {
            count++;
        } else {
            count--;
        }

    }

    return majority;
};



// Testing Examples :

// Example - 01 :

var nums = [3,2,3];
console.log(`
Example - 01 :
For the Given Array [${nums}] of elements ,
The Majority Element is : ${majorityElement(nums)} .
`);

// Example - 02 :

var nums = [2,2,1,1,1,2,2];
console.log(`
Example - 02 :
For the Given Array [${nums}] of elements ,
The Majority Element is : ${majorityElement(nums)} .
`);