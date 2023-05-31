var isArrayMonotonic = function ( nums ){
    let increasing = true;
    let decreasing = true;
    for (let i = 1; i < nums.length; i++) {
      if (nums[i] > nums[i - 1]) {
        decreasing = false;
      }
      if (nums[i] < nums[i - 1]) {
        increasing = false;
      }
    }
    if ( increasing || decreasing === true) {
        return `
        ${true}.
        The given array is a Monotoinc Array.
        `;
    }
    else {
        return `
        ${false}.
        The given array is not a Monotoinc Array.
        `;     
    }
  };
  var nums = [1, 2, 2, 3];
console.log(isArrayMonotonic(nums));