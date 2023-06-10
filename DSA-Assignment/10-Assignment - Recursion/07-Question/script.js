function swap(str, i, j) {
    const strArr = str.split('');
    const temp = strArr[i];
    strArr[i] = strArr[j];
    strArr[j] = temp;
    return strArr.join('');
  }
  
  function permutations(str, left, right, result) {
    if (left === right) {
      result.push(str);
    } else {
      for (let i = left; i <= right; i++) {
        str = swap(str, left, i);
        permutations(str, left + 1, right, result);
        str = swap(str, left, i); // backtrack
      }
    }
  }
  
  function printPermutations(str) {
    const result = [];
    permutations(str, 0, str.length - 1, result);
    return result;
  }
  
//Examples :

//Example - 01 :
  var str = "cd";
  console.log(`All The Permutations of a given string "${str}" is :`);
  var permutedStrings = printPermutations(str);
  permutedStrings.forEach((permutedStr) => console.log(permutedStr));
  console.log();

//Example - 02 :
  var str = "abb";
  console.log(`All The Permutations of a given string "${str}" is :`);
  var permutedStrings = printPermutations(str);
  permutedStrings.forEach((permutedStr) => console.log(permutedStr));
  