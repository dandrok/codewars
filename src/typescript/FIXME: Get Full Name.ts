/* 
The code provided is supposed return a person's Full Name given their first and last names.

But it's not working properly.

Notes
The first and/or last names are never null, but may be empty.

Task
Fix the bug so we can all go home early.
*/

export class Dinglemouse {
  private firstName: string;
  private lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName() {
    return [this.firstName, this.lastName].filter(Boolean).join(" ");
  }
}
