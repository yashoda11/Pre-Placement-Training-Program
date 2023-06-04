var findDoubleArray = function (changed) {
    let nums = new Set();
    double = [];
    for ( let i = 0; i < changed.length; i ++) {
        nums.add(changed[i]);
        if ( nums.has(changed[i]/2)) {
            double.push(changed[i]/2);
        }
    }
    return double;
};
var changed = [1,3,4,2,6,8];
console.log(`
The Double Array is : [${changed}] ,

The Original array is : [${findDoubleArray(changed)}]
`);;