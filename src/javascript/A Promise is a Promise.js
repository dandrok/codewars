/* 
Create a resolved javascript Promise that will return 'Hello World!'.
 */

const promiseHelloWorld = async () => "Hello World!";

const promiseHelloWorld = () => new Promise(resolve => resolve("Hello World!"))

const promiseHelloWorld = () => Promise.resolve("Hello World!")
