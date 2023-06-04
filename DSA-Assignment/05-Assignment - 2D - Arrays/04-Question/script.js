function finDistinctNumbers(nums1, nums2) {
    const set1 = new Set(nums1);
    const set2 = new Set(nums2);
  
    const notInNums1 = nums1.filter((num) => !set2.has(num));
    const notInNums2 = nums2.filter((num) => !set1.has(num));
  
    return          [notInNums1, notInNums2];
  }
  
  const nums1 = [1, 2, 3];
  const nums2 = [2, 4, 6];
  console.log(finDistinctNumbers(nums1, nums2));