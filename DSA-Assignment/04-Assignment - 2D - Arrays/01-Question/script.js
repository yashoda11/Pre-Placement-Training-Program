function commonElements(arr1, arr2, arr3) {
    const commonElements = new Set();
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
  
    while (p1 < arr1.length && p2 < arr2.length && p3 < arr3.length) {
      if (arr1[p1] === arr2[p2] && arr2[p2] === arr3[p3]) {
        commonElements.add(arr1[p1]);
        p1++;
        p2++;
        p3++;
      } else if (arr1[p1] < arr2[p2]) {
        p1++;
      } else if (arr2[p2] < arr3[p3]) {
        p2++;
      } else {
        p3++;
      }
    }
  
    return Array.from(commonElements).sort((a, b) => a - b);
  }
  
  // Example usage:
  const arr1 = [1, 2, 3, 4, 5];
  const arr2 = [1, 2, 5, 7, 9];
  const arr3 = [1, 3, 4, 5, 8];
  console.log(`The Comment Elements appeared in the given three arrays are : `);
  console.log(commonElements(arr1, arr2, arr3));