const candyType = [1,1,2,2,3,3];
const distributeCandies = C => Math.min((new Set(C)).size, C.length / 2);
console.log(`
        Alice can eat the ${distributeCandies(candyType)} different types of candies.
          `);