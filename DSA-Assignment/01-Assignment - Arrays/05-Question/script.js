var array1 = [1,2,3,0,0,0];
var array2 = [4,5,6];

// var merg = function(array1,array2){
//     var arr = [];
//     var j = 0;
//     var i = 0;
//     while(i < array1.length && j < array2.length){
//         if(array1[i] < array2[j]){
//             arr.push(array1[i]);
//             i++;
//         }
//         else{
//             arr.push(array2[j]);
//             j++;
//         }
//     }
//     while(j < array2.length){
//         arr.push(array2[j]);
//         j++;
//     }
//     return arr;
// }
// var array = merg(array1,array2);
// console.log(array);


var merg = array1.concat(...array2);

console.log(merg);