class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.bottom = null;
  }
}

function mergeLists(head1, head2) {
  if (!head1)
    return head2;
  if (!head2)
    return head1;

  let result = null;
  if (head1.data <= head2.data) {
    result = head1;
    result.bottom = mergeLists(head1.bottom, head2);
  } else {
    result = head2;
    result.bottom = mergeLists(head1, head2.bottom);
  }

  return result;
}

function flatten(root) {
  if (!root || !root.next)
    return root;

  root.next = flatten(root.next);

  root = mergeLists(root, root.next);

  return root;
}

// Create the first example linked list
let head1 = new Node(5);
head1.next = new Node(10);
head1.next.next = new Node(19);
head1.next.next.next = new Node(28);

head1.bottom = new Node(7);
head1.bottom.bottom = new Node(8);
head1.bottom.bottom.bottom = new Node(30);

head1.next.bottom = new Node(20);
  
  head1.next.next.bottom = new Node(22);
  head1.next.next.next.bottom = new Node(35);
  
  head1.next.next.next.bottom.bottom = new Node(40);
  head1.next.next.next.bottom.bottom.bottom = new Node(45);
  head1.next.next.next.bottom.bottom.bottom.bottom = new Node(50);

// Flatten the first linked list
head1 = flatten(head1);

// Print the flattened linked list
let current1 = head1;
let output1 = '';
while (current1) {
  output1 += current1.data;
  if (current1.bottom)
    output1 += ' -> ';
  current1 = current1.bottom;
}

console.log("Output for Example - 01 :");
console.log(output1);

console.log("------------------------");

// Create the second example linked list
let head2 = new Node(5);
head2.next = new Node(10);
head2.next.next = new Node(19);
head2.next.next.next = new Node(28);

head2.bottom = new Node(7);
head2.bottom.bottom = new Node(8);
head2.bottom.bottom.bottom = new Node(30);

head2.next.next.bottom = new Node(22);
head2.bottom.bottom.bottom.bottom = new Node(50);

// Flatten the second linked list
head2 = flatten(head2);

// Print the flattened linked list
let current2 = head2;
let output2 = '';
while (current2) {
  output2 += current2.data;
  if (current2.bottom)
    output2 += ' -> ';
  current2 = current2.bottom;
}

console.log("Output for Example - 02 :");
console.log(output2);
