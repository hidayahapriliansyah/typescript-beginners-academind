"use strict";
let add;
add = (n1, n2) => {
    return n1 + n2;
};
// sama kayak ini coy
// type Person = {
//     name: string;
//     age: number;
//     greet(phrase: string): void;
// }
class Person {
    constructor(n) {
        this.age = 30;
        this.name = n;
    }
    greet(phrase) {
        console.log(phrase + ' ' + this.name);
    }
}
let user1;
// user1 = {
//   name: 'Hidayah',
// age: 22,
//   greet(phrase) {
//     console.log(phrase + ' ' + this.name);
//   },
// };
user1 = new Person('Adi Muhamad F');
user1.greet('Hi! I am');
