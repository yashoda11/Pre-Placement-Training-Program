var squareOfEachNumber = function( nums ){
    console.log(`
    The Array is : [${nums}]`
    );
    var squares = nums.map( S => S*S);
    var squareSort = squares.sort((a , b) => (a - b));
    console.log(`
    The Squares of each number in the given array is sorted in non-decreasing order is : [${squareSort}].
    `);
}
var nums = [-4,-1,0,3,10];
squareOfEachNumber( nums );
