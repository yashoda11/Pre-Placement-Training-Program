// Node class to define each node in the linked list
class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  // Function to insert a node in a linked list
  function insert(root, item) {
    let temp = new Node(item);
  
    if (root === null) {
      root = temp;
    } else {
      let ptr = root;
      while (ptr.next !== null) {
        ptr = ptr.next;
      }
  
      ptr.next = temp;
    }
    return root;
  }
  
  // Function which returns a new linked list
  function newList(root1, root2) {
    let ptr1 = root1;
    let ptr2 = root2;
    let root = null;
    let temp;
  
    while (ptr1 !== null) {
      temp = new Node();
  
      // Compare for greater node
      if (ptr1.data < ptr2.data) {
        temp.data = ptr2.data;
      } else {
        temp.data = ptr1.data;
      }
  
      if (root === null) {
        root = temp;
      } else {
        let ptr = root;
        while (ptr.next !== null) {
          ptr = ptr.next;
        }
  
        ptr.next = temp;
      }
      ptr1 = ptr1.next;
      ptr2 = ptr2.next;
    }
    return root;
  }
  
  function display(root) {
    let output = '';
    while (root !== null) {
      output += root.data;
      if (root.next !== null) {
        output += '->';
      }
      root = root.next;
    }
    console.log(output);
  }
  
  
  // Driver code
  var root1 = null;
  var root2 = null;
  var root = null;
  
  // First linked list
  root1 = insert(root1, 5);
  root1 = insert(root1, 2);
  root1 = insert(root1, 3);
  root1 = insert(root1, 8);
  
  console.log("Input - 01 : ");
  console.log("First List: ");
  display(root1);
  
  // Second linked list
  root2 = insert(root2, 1);
  root2 = insert(root2, 7);
  root2 = insert(root2, 4);
  root2 = insert(root2, 5);
  
  console.log("Second List: ");
  display(root2);
  
  root = newList(root1, root2);
  console.log("New List: ");
  display(root);
  


  // Driver code
  var root1 = null;
  var root2 = null;
  var root = null;
  
  // First linked list
  root1 = insert(root1, 2);
  root1 = insert(root1, 8);
  root1 = insert(root1, 9);
  root1 = insert(root1, 3);
  
  console.log("\nInput - 02 : ");
  console.log("First List: ");
  display(root1);
  
  // Second linked list
  root2 = insert(root2, 5);
  root2 = insert(root2, 3);
  root2 = insert(root2, 6);
  root2 = insert(root2, 4);
  
  console.log("Second List: ");
  display(root2);
  
  root = newList(root1, root2);
  console.log("New List: ");
  display(root);
  

  

  