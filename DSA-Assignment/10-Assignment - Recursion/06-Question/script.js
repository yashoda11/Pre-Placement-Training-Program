function towerOfHanoi(n, sourceRod, destinationRod, auxiliaryRod) {
    if (n === 1) {
      console.log(`Move disk 1 from rod ${sourceRod} to rod ${destinationRod}`);
      return 1;
    }
    
    const steps1 = towerOfHanoi(n - 1, sourceRod, auxiliaryRod, destinationRod);
    console.log(`Move disk ${n} from rod ${sourceRod} to rod ${destinationRod}`);
    const steps2 = towerOfHanoi(n - 1, auxiliaryRod, destinationRod, sourceRod);
    
    return steps1 + 1 + steps2;
  }
  
//Examples :

//Examples - 01 :
  var N = 2;
  console.log(`\nThe Tower of Hanoi puzzle for N = ${N} is : `);
  var totalMoves = towerOfHanoi(N, 1, 3, 2);
  console.log(`Total moves is: ${totalMoves}\n`);
  
//Examples - 02 :
  var N = 3;
  console.log(`The Tower of Hanoi puzzle for N = ${N} is : `);
  var totalMoves = towerOfHanoi(N, 1, 3, 2);
  console.log(`Total moves is: ${totalMoves}\n`);
  