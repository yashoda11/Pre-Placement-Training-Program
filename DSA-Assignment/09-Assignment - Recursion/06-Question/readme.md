# **Assignment Questions - 09**

## **Question 6**

Given first term (a), common difference (d) and a integer N of the Arithmetic Progression series, the task is to find Nth term of the series.

**Example - 01 :**

Input : a = 2 d = 1 N = 5
Output : 6
- The 5th term of the series is : 6

**Example - 02 :**

Input : a = 5 d = 2 N = 10
Output : 23
- The 10th term of the series is : 23

**Explanation :**
- To find the Nth term of an arithmetic progression (AP) series with the first term a, common difference d, and integer N, we can use recursion. 
- The Nth term can be calculated as a + (N - 1) * d, where N is the position of the term in the series.
- In this code, the findNthTerm function takes the first term a, common difference d, and the position N as inputs.
- The base case occurs when N is 1, in which case the function returns the first term a.
- If N is greater than 1, the function makes a recursive call to findNthTerm with the same first term a, common difference d, and N decremented by 1. It adds the common difference d to the term calculated for N - 1 to find the Nth term.
- Finally, it returns the result of the recursive call, which gives the Nth term of the AP series.
- In the example usage, the code finds the 5th term of the AP series with a = 2 and d = 1, and the 10th term of the AP series with a = 5 and d = 2. The outputs are 6 and 23, respectively.