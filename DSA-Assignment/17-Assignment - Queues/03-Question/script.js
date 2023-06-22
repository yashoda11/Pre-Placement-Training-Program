var countStudents = function (students, sandwiches) {
    const queue = [...students]; // Create a queue with initial student preferences
  
    let count = 0; // Count of students unable to eat
  
    while (count < queue.length) {
      if (queue[0] === sandwiches[0]) {
        queue.shift(); // Student takes the sandwich
        sandwiches.shift(); // Remove the top sandwich from the stack
        count = 0; // Reset count since a student got a preferred sandwich
      } else {
        queue.push(queue.shift()); // Student goes to the end of the line
        count++; // Increment count since the student couldn't get the preferred sandwich
      }
    }
  
    return count;
  };

//Examples :

//Example - 01 :

var students = [1,1,0,0];
var sandwiches = [0,1,0,1];
console.log(`
The Number of given Students [${students}] that are unable to eat given Sandwiches [${sandwiches}] are : ${countStudents(students, sandwiches)} .
`);                                              // Output: 0

//Example - 02 :

var students = [1,1,1,0,0,1];
var sandwiches = [1,0,0,0,1,1];
console.log(`
The Number of given Students [${students}] that are unable to eat given Sandwiches [${sandwiches}] are : ${countStudents(students, sandwiches)} .
`);                                             // Output: 3