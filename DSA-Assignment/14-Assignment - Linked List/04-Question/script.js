// Definition for a Node.
function Node(val) {
  this.val = val;
  this.next = null;
  this.random = null;
}

/**
* @param {Node} head
* @return {Node}
*/
var copyRandomList = function(head) {
  if (head === null) {
      return null;
  }
  
  // Step 1: Create a new copy of each node and insert it next to the original node
  var current = head;
  while (current !== null) {
      var newNode = new Node(current.val);
      newNode.next = current.next;
      current.next = newNode;
      current = newNode.next;
  }
  
  // Step 2: Update the random pointers of the copied nodes
  current = head;
  while (current !== null) {
      if (current.random !== null) {
          current.next.random = current.random.next;
      }
      current = current.next.next;
  }
  
  // Step 3: Separate the original list from the copied list
  var dummy = new Node(0);
  var copiedHead = dummy;
  current = head;
  while (current !== null) {
      dummy.next = current.next;
      dummy = dummy.next;
      current.next = current.next.next;
      current = current.next;
  }
  
  return copiedHead.next;
};

// Example - 01 :
var N1 = 4;
var M1 = 2;
var values1 = [1, 2, 3, 4];
var pairs1 = [[1, 2], [2, 4]];

var originalList1 = new Node(values1[0]);
var current1 = originalList1;
for (var i = 1; i < N1; i++) {
  current1.next = new Node(values1[i]);
  current1 = current1.next;
}

current1 = originalList1;
for (var j = 0; j < M1; j++) {
  var a = pairs1[j][0];
  var b = pairs1[j][1];
  var temp = originalList1;
  var nodeA = null;
  var nodeB = null;

  while (temp !== null) {
      if (temp.val === a) {
          nodeA = temp;
      }
      if (temp.val === b) {
          nodeB = temp;
      }
      temp = temp.next;
  }

  if (nodeA !== null && nodeB !== null) {
      nodeA.random = nodeB;
  }
}

var copiedList1 = copyRandomList(originalList1);

console.log("Example - 01 :");
current1 = copiedList1;
while (current1 !== null) {
  console.log("Value: " + current1.val);
  console.log("Random Pointer: " + (current1.random !== null ? current1.random.val : "null"));
  current1 = current1.next;
}

// Example - 02 :
var N2 = 4;
var M2 = 2;
var values2 = [1, 3, 5, 9];
var pairs2 = [[1, 1], [3, 4]];

var originalList2 = new Node(values2[0]);
var current2 = originalList2;
for (var i = 1; i < N2; i++) {
  current2.next = new Node(values2[i]);
  current2 = current2.next;
}

current2 = originalList2;
for (var j = 0; j < M2; j++) {
  var a = pairs2[j][0];
  var b = pairs2[j][1];
  var temp = originalList2;
  var nodeA = null;
  var nodeB = null;

  while (temp !== null) {
      if (temp.val === a) {
          nodeA = temp;
      }
      if (temp.val === b) {
          nodeB = temp;
      }
      temp = temp.next;
  }

  if (nodeA !== null && nodeB !== null) {
      nodeA.random = nodeB;
  }
}

var copiedList2 = copyRandomList(originalList2);

console.log("\nExample - 02 :");
current2 = copiedList2;
while (current2 !== null) {
  console.log("Value: " + current2.val);
  console.log("Random Pointer: " + (current2.random !== null ? current2.random.val : "null"));
  current2 = current2.next;
}