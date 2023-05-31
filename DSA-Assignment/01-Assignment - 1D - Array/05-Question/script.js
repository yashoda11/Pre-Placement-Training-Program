var merge = function(nums1, m, nums2, n) {
    for (let i = m; i <= m + n; i++) {
      if (nums1[i] === 0) {
        nums1[i] = nums2[i - m]
      }
    }
    nums1.sort((a,b) => a-b)
    return nums1;
  };
  var nums1 = [1,2,3,0,0,0];
  var m = 3;
  var nums2 = [2,5,6];
  var n = 3
  console.log(`
      The Output is : [${merge( nums1, m, nums2, n )}]
  `);
   
  