// Linked list node
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Function to delete middle of the linked list
function deleteMiddle(head) {
  if (head === null || head.next === null) {
    return null; // No middle element to delete
  }

  let slow = head;
  let fast = head;
  let prev = null;

  while (fast !== null && fast.next !== null) {
    fast = fast.next.next;
    prev = slow;
    slow = slow.next;
  }

  prev.next = slow.next; // Delete the middle element(s)
  return head;
}

// Function to convert linked list to array
function linkedListToArray(head) {
  const result = [];
  let current = head;

  while (current !== null) {
    result.push(current.value);
    current = current.next;
  }

  return result;
}

// Function to create a linked list with given values
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

// Test cases
const testCases = [
  [1, 2, 3, 4, 5], // Odd number of nodes
  [2, 4, 6, 7, 5, 1] // Even number of nodes
];

for (const values of testCases) {
  const head = createLinkedList(values);
  const modifiedHead = deleteMiddle(head);
  const result = linkedListToArray(modifiedHead);
  console.log(`Input: LinkedList: [${values.join(' -> ')}]`);
  console.log(`Output: [${result.join(' -> ')}]`);
  console.log('-----------------------');
}
