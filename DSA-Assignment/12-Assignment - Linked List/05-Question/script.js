class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function detectAndRemoveLoop(head) {
  if (head == null || head.next == null) {
    return 0; // No loop present
  }

  let slow = head;
  let fast = head;

  // Move fast pointer by two steps and slow pointer by one step
  while (fast != null && fast.next != null) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      // Loop detected
      break;
    }
  }

  // If loop is not present, return 0
  if (slow !== fast) {
    return 0;
  }

  // Move slow pointer to the head and keep fast pointer at the meeting point
  slow = head;
  while (slow.next !== fast.next) {
    slow = slow.next;
    fast = fast.next;
  }

  // Remove the loop by setting the next of the last node in the loop to null
  fast.next = null;

  return 1; // Loop successfully removed
}

function createLinkedList(values) {
  if (values.length === 0) {
    return null;
  }

  const head = new Node(values[0]);
  let current = head;

  for (let i = 1; i < values.length; i++) {
    const newNode = new Node(values[i]);
    current.next = newNode;
    current = newNode;
  }

  return head;
}

function printLinkedList(head) {
  let current = head;
  const values = [];

  while (current != null) {
    values.push(current.value);
    current = current.next;
  }

  console.log(values.join(" -> "));
}

// Example usage
var N = 4;
var values = [1, 2, 3, 4];
var X = 1;

const head = createLinkedList(values);
console.log("Original Linked List:");
printLinkedList(head);

const result = detectAndRemoveLoop(head);
console.log("Output:", result);

console.log("Updated Linked List:");
printLinkedList(head);

var N = 3;
var values = [1, 3, 4];
var X = 2;

var head1 = createLinkedList(values);
console.log("Original Linked List:");
printLinkedList(head1);

var result1 = detectAndRemoveLoop(head);
console.log("Output:", result1);

console.log("Updated Linked List:");
printLinkedList(head1);