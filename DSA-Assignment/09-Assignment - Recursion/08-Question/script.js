function getProduct(arr) {
    let product = 1;
    
    for (let i = 0; i < arr.length; i++) {
      product *= arr[i];
    }
    
    return product;
  }
  
// Examples :

// Example - 01 :
  const arr1 = [1, 2, 3, 4, 5];
  console.log(`
  1. The Product of the all given array [${arr1}] elements is : ${getProduct(arr1)}.
  `);                                                                              // Output: 120


  // Example - 02 :
  const arr2 = [1, 6, 3];
  console.log(`
  2. The Product of the all given array [${arr2}] elements is : ${getProduct(arr2)}.
  `);                                                                              // Output: 18
  