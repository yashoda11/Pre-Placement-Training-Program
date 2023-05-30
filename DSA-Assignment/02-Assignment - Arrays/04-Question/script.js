function canPlaceFlowers(flowerbed, n) {
  let count = 0;
  let i = 0;
  while (i < flowerbed.length) {
    if (
      flowerbed[i] === 0 &&
      (i === 0 || flowerbed[i - 1] === 0) &&
      (i === flowerbed.length - 1 || flowerbed[i + 1] === 0)
    ) {
      flowerbed[i] = 1;
      count++;
    }
    i++;
    if (count >= n) {
      return true;
    }
  }
  return false;
}
let flowerbed = [1, 0, 0, 0, 1];
let n = 1;
console.log(canPlaceFlowers(flowerbed, n));