var isStrobogrammatic = function(num) {
    const strobogrammaticPairs = {
      '0': '0',
      '1': '1',
      '6': '9',
      '8': '8',
      '9': '6'
    };
  
    let left = 0;
    let right = num.length - 1;
  
    while (left <= right) {
      const leftChar = num[left];
      const rightChar = num[right];
  
      if (!(leftChar in strobogrammaticPairs) || strobogrammaticPairs[leftChar] !== rightChar) {
        return false;
      }
  
      left++;
      right--;
    }
  
    return true;
  };
  
  var num = "69";
  console.log(isStrobogrammatic(num));