// type AddFn = (n1: number, n2: number) => number; 
interface AddFn {
  (n1: number, n2: number): number;
}

let add: AddFn;
add = (n1: number, n2: number) => {
  return n1 + n2;
}

interface Named {
  readonly name?: string;
  outputName?: string;
}

interface FormalGreet {
  greetingPhrase: string;
}

interface Greetable extends Named {
  greet(phrase: string): void;
}

// sama kayak ini coy
// type Person = {
//     name: string;
//     age: number;

//     greet(phrase: string): void;
// }

class Person implements Greetable {
  name?: string;
  age = 30;

  constructor(n?: string) {
    if (n) {
      this.name = n;
    }
  }

  greet(phrase: string): void {
    if (this.name) {
      console.log(phrase + ' ' + this.name);
    } else {
      console.log('Hello!');
    }
  }
}

let user1: Person;

// user1 = {
//   name: 'Hidayah',
  // age: 22,
//   greet(phrase) {
//     console.log(phrase + ' ' + this.name);
//   },
// };

user1 = new Person('Adi');
user1.greet('Hi! I am');
