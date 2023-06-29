let bad;

var isBadVersion = function (version) {
  return version >= bad;
};

var firstBadVersion = function (n) {
  let left = 1; 
  let right = n; 

  while (left < right) {
    const mid = Math.floor(left + (right - left) / 2);

    if (isBadVersion(mid)) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return left;

};


// Testing Examples :

// Example - 01 :
const n1 = 5;
bad = 4;
const result1 = firstBadVersion(n1);
console.log("Example - 01 :");
console.log(result1);                      // Output: 4

// Example - 02 :
const n2 = 1;
bad = 1;
const result2 = firstBadVersion(n2);
console.log("\nExample - 02 :"); 
console.log(result2);                      // Output: 1