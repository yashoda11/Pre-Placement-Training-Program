var findDoubleArray = function (changed) {
    console.log(`
        The given double Array is : [${changed}]`);;
    if (changed.length % 2 !== 0) {
        return `
        The length of changed ${changed.length} is odd, it cannot be a doubled array.
        hence [].
        `;
      }
    let nums = new Set();
    double = [];
    for ( let i = 0; i < changed.length; i ++) {
        nums.add(changed[i]);
        if ( nums.has(changed[i]/2)) {
            double.push(changed[i]/2);
        }
    }
    return `
        The Original array is : [${double}]
    `;
};
var changed = [1,3,4,2,6,8];
console.log((findDoubleArray(changed)));
