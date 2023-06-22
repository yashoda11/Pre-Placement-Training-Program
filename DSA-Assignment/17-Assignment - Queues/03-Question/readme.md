# **Assignment Questions - 17**
## **Question - 03**

The school cafeteria offers circular and square sandwiches at lunch break, referred to by numbers `0` and `1` respectively. All students stand in a queue. Each student either prefers square or circular sandwiches.
- The number of sandwiches in the cafeteria is equal to the number of students. The sandwiches are placed in a **stack**. At each step:
    - If the student at the front of the queue **prefers** the sandwich on the top of the stack, they will **take it** and leave the queue.
    - Otherwise, they will **leave it** and go to the queue's end.
- This continues until none of the queue students want to take the top sandwich and are thus unable to eat.
- You are given two integer arrays `students` and `sandwiches` where `sandwiches[i]` is the type of the `ith` sandwich in the stack (`i = 0` is the top of the stack) and `students[j]` is the preference of the `jth` student in the initial queue (`j = 0` is the front of the queue). 
- Return *the number of students that are unable to eat.*

**Example - 01 :**
```
Input : students = [1,1,0,0], sandwiches = [0,1,0,1]
Output : 0
Explanation :
- Front student leaves the top sandwich and returns to the end of the line making students = [1,0,0,1].
- Front student leaves the top sandwich and returns to the end of the line making students = [0,0,1,1].
- Front student takes the top sandwich and leaves the line making students = [0,1,1] and sandwiches = [1,0,1].
- Front student leaves the top sandwich and returns to the end of the line making students = [1,1,0].
- Front student takes the top sandwich and leaves the line making students = [1,0] and sandwiches = [0,1].
- Front student leaves the top sandwich and returns to the end of the line making students = [0,1].
- Front student takes the top sandwich and leaves the line making students = [1] and sandwiches = [1].
- Front student takes the top sandwich and leaves the line making students = [] and sandwiches = [].
Hence all students are able to eat.
```

**Example - 02 :**
```
Input : students = [1,1,1,0,0,1], sandwiches = [1,0,0,0,1,1]
Output : 3
```

**Analysis :**
1. The countStudents function takes two arrays as input: students representing the preferences of the students and sandwiches representing the types of sandwiches in the stack.
2. We create a queue by copying the students array using the spread operator ([...students]).
3. We initialize a variable count to keep track of the number of students unable to eat, starting with 0.
4. We enter a while loop that continues as long as count is less than the length of the queue. This loop simulates the process until no student can eat.
5. Inside the loop, we check if the student at the front of the queue (queue[0]) prefers the sandwich at the top of the stack (sandwiches[0]). If they do, we remove the student from the front of the queue (queue.shift()) and remove the top sandwich from the stack (sandwiches.shift()). This means the student takes the sandwich.
6. If the student doesn't prefer the sandwich, we move the student to the end of the line by pushing them to the end of the queue (queue.push(queue.shift())). We also increment the count since the student couldn't get the preferred sandwich.
7. After each iteration, we reset the count to 0 since a student got their preferred sandwich in the previous step.
8. Once the while loop finishes, we return the final value of count, which represents the number of students unable to eat.