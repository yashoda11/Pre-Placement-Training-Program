function addTwoNumbers(l1, l2) {
    let result = [];
    let carry = 0;
  
    while (l1 !== null || l2 !== null) {
      let x = l1 !== null ? l1.val : 0;
      let y = l2 !== null ? l2.val : 0;
      let sum = x + y + carry;
      carry = Math.floor(sum / 10);
  
      result.push(sum % 10);
  
      if (l1 !== null) l1 = l1.next;
      if (l2 !== null) l2 = l2.next;
    }
  
    if (carry > 0) {
      result.push(carry);
    }
  
    return result;
  }
  
  // Example 1
  let l1 = { val: 2, next: { val: 4, next: { val: 3, next: null } } };
  let l2 = { val: 5, next: { val: 6, next: { val: 4, next: null } } };
  
  console.log(addTwoNumbers(l1, l2)); // Output: [7, 0, 8]
  
  // Example 2
  l1 = { val: 0, next: null };
  l2 = { val: 0, next: null };
  
  console.log(addTwoNumbers(l1, l2)); // Output: [0]
  
  // Example 3
  l1 = {
    val: 9,
    next: {
      val: 9,
      next: {
        val: 9,
        next: {
          val: 9,
          next: {
            val: 9,
            next: {
              val: 9,
              next: {
                val: 9,
                next: null,
              },
            },
          },
        },
      },
    },
  };
  l2 = {
    val: 9,
    next: {
      val: 9,
      next: {
        val: 9,
        next: {
          val: 9,
          next: null,
        },
      },
    },
  };
  
  console.log(addTwoNumbers(l1, l2)); // Output: [8, 9, 9, 9, 0, 0, 0, 1]
  