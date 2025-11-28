/*
*
You're building a simple greeting system that simulates fetching a user's name from a database (which takes time).

Your task: Create an async function that:

    Waits for the user's name to be fetched
    Returns a greeting message with that name

This kata will help you understand:

    How to use async/await syntax
    How to work with functions that return Promises
    The difference between sync and async code

A helper function is provided:

fetchUserName(id: number): Promise - simulates fetching a name (takes ~50ms)
*/
export async function greetUser(userId: number): Promise<string> {
  // Your code here
  // Hint: use 'await' to wait for fetchUserName
  // Then return a greeting like "Hello, Alice!"
  const name = await fetchUserName(userId)
  return `Hello, ${name}!`
}
