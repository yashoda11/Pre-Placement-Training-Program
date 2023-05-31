var maxProduct = function(nums){
    let n = nums.length;
    nums.sort((a,b) => (a-b));
    console.log(`
    The Maximum Product is : ${nums[n-1]*nums[n-2]*nums[n-3]}
             `);
};
var nums = [1,2,3];
maxProduct(nums);