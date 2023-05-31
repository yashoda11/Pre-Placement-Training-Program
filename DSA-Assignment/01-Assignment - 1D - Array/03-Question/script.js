var returnIndex = function( nums , target ){
    for(let i=0; i < nums.length; i++){
    if(nums[i] == target)
        return  `
        The Array is : [${nums}], 
        The Target value is : ${target} at the index of : ${i}
        `;
    }
    nums.unshift(target);
    nums.sort(function(a,b){return a-b})
    for (let i=0; i<nums.length; i++){
        if(nums[i] == target) 
        return `
        The Target Value ${target} is not in the given array. Hence, adding target Value to the given array. 
        The New Array is: ${nums} 
        The Target Value ${target} at the index of ${i}
        `;
    }
};
console.log(returnIndex([1,3,5,6],5));