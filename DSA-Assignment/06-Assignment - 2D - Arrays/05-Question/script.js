var minimumProductSum = function (nums1, nums2) {

    nums1.sort((a,b) => (a-b));
    nums2.sort((a,b) => (b-a));

    let sum = 0;
    for (let i = 0; i < nums1.length; i++) {
        sum += nums1[i]*nums2[i];
    }
    return `
    The Minimum Product Sum for the given two arrays is : ${sum}.
    `;
};
var nums1 = [5,3,4,2];
var nums2 = [4,2,2,5];

console.log(minimumProductSum(nums1, nums2));
