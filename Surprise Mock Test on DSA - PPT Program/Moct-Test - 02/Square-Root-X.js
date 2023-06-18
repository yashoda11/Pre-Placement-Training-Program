var squareRootOfNumber = function (x) {
    if (x < 2) {
      return x;
    }
  
    let left = 0;
    let right = x;
  
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      let square = mid * mid;
  
      if (square === x) {
        return mid;
      } else if (square < x) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  
    return right;
  };

  //Examples :

  //Example - 01 :
  var x = 4;
  console.log(`
  The Square Root of a given Number (x) = ${x} is : ${squareRootOfNumber(x)}.
  `);

  //Example - 02 :
  var x = 8;
  console.log(`
  The Square Root of a given Number (x) = ${x} is : ${squareRootOfNumber(x)}.
  `);