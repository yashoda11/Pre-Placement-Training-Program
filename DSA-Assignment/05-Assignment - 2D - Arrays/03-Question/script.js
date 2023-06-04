var squareOfNumber = function ( nums ) {
    console.log(`
    The Array is : [${nums}].`
    );
    
    var square = nums.map ( S => S*S);

    var sortSquareNumber = square.sort((a, b) => (a - b));

    console.log(`
    The Squares of each number in the given array is sorted in non-decreasing order is : [${sortSquareNumber}].
    `);
}
var nums = [-4, -1, 0, 3, 10];
squareOfNumber( nums );
