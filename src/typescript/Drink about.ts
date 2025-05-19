/* 
Kids drink toddy.
Teens drink coke.
Young adults drink beer.
Adults drink whisky.
Make a function that receive age, and return what they drink.

Rules:

Children under 14 old.
Teens under 18 old.
Young under 21 old.
Adults have 21 or more.
Examples: (Input --> Output)

13 --> "drink toddy"
17 --> "drink coke"
18 --> "drink beer"
20 --> "drink beer"
30 --> "drink whisky"
*/

type Drinks = {
  age: number;
  drink: string;
};

export function peopleWithAgeDrink(old: number): string {
  const drinks: Drinks[] = [
    { age: 14, drink: "drink toddy" },
    { age: 18, drink: "drink coke" },
    { age: 21, drink: "drink beer" },
    { age: Infinity, drink: "drink whisky" },
  ];

  return drinks.find(({ age }) => old < age)!.drink || "";
}
