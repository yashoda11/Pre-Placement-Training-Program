var lastRemaining =  function (n) {
    if (n === 1) {
      return 1;
    }
  
    return 2 * (1 + Math.floor(n / 2) - lastRemaining(Math.floor(n / 2)));
  };
  
//Examples : 

//Example - 01 :
  var n = 9;
  console.log(`
  The Last Number that remains in the array numbers in the range of [1 , ${n}] is : ${lastRemaining(n)} 
  `);

//Example - 02 :
  var n = 1;
  console.log(`
  The Last Number that remains in the array numbers in the range of [1 , ${n}] is : ${lastRemaining(n)}
  `);
  