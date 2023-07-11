var findClosestElements = function (arr, k, x) {

    let left = 0;
    let right = arr.length - 1;

    while (right - left >= k) {

        if (Math.abs(arr[left] - x) > Math.abs(arr[right] - x)) {
            left++;
        } else {
            right--;
        }

    }

    return arr.slice(left, right + 1);

};



// Testing Examples :

// Example - 01 :

var arr = [1,2,3,4,5];
var k = 4;
var x = 3;
console.log(`
Example - 01 :
For The Given a Sorted Integer Array (arr) is : [${arr}] and 
The Two Integers (K) ${k} and (X) ${x} ,
The ${k}th (K) Closest Integers to ${x} (X) in the given Array is :[${findClosestElements(arr, k, x)}] .
`);

// Example - 02 :

var arr = [1,2,3,4,5];
var k = 4;
var x = -1;
console.log(`
Example - 02 :
For The Given a Sorted Integer Array (arr) is : [${arr}] and 
The Two Integers (K) ${k} and (X) ${x} ,
The ${k}th (K) Closest Integers to ${x} (X) in the given Array is :[${findClosestElements(arr, k, x)}] .
`);