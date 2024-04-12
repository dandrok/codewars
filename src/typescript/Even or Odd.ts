/* 
Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
 */

export const even_or_odd = (n: number): string => (n % 2 ? 'Odd' : 'Even')

export const even_or_odd2 = (n: number): string => (n % 2 == 0 ? 'Even' : 'Odd')
