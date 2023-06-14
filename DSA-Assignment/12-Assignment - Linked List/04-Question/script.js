// Linked list node
class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  // Function to check if the linked list is a palindrome
  function isPalindrome(head) {
    if (head === null || head.next === null) {
      return true; // Empty list or single node list is a palindrome
    }
  
    let slow = head;
    let fast = head;
    let prev = null;
  
    // Move fast pointer to the end and slow pointer to the middle of the list
    while (fast !== null && fast.next !== null) {
      fast = fast.next.next;
  
      let temp = slow.next;
      slow.next = prev;
      prev = slow;
      slow = temp;
    }
  
    // Adjust pointers for odd number of nodes
    if (fast !== null) {
      slow = slow.next;
    }
  
    // Compare the two halves of the list
    while (prev !== null && slow !== null) {
      if (prev.value !== slow.value) {
        return false; // Not a palindrome
      }
      prev = prev.next;
      slow = slow.next;
    }
  
    return true; // Palindrome
  }
  
  // Function to create a linked list with given characters
  function createLinkedList(characters) {
    if (characters.length === 0) {
      return null;
    }
  
    const head = new Node(characters[0]);
    let current = head;
  
    for (let i = 1; i < characters.length; i++) {
      const newNode = new Node(characters[i]);
      current.next = newNode;
      current = newNode;
    }
  
    return head;
  }
  
  // Test cases
  const testCases = [
    ['R', 'A', 'D', 'A', 'R'],                 // Palindrome
    ['C', 'O', 'D', 'E']                       // Not a palindrome
  ];
  
  for (const testCase of testCases) {
    const head = createLinkedList(testCase);
    const isPalindromeResult = isPalindrome(head);
    console.log(`Input: LinkedList: ${testCase.join('->')}`);
    console.log(`Output: ${isPalindromeResult ? 'Yes - The given LinkedList is a Palindrome' : 'No - The given LinkedList is not a Palindrome'}`);
    console.log('-----------------------');
  }
  