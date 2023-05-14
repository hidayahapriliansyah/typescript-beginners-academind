interface Greetable {
  name: string;

  greet(phrase: string): void;
}

// sama kayak ini coy
// type Person = {
//     name: string;
//     age: number;

//     greet(phrase: string): void;
// }

class Person implements Greetable {
  name: string;
  age = 30;

  constructor(n: string) {
    this.name = n;
  }

  greet(phrase: string): void {
    console.log(phrase + ' ' + this.name);
  }
}

let user1: Person;

user1 = {
  name: 'Hidayah',
  age: 22,
  greet(phrase) {
    console.log(phrase + ' ' + this.name);
  },
};

// user1 = new Person('Adi Muhamad F');
user1.greet('Hi! I am');
