"use strict";
// sama kayak ini coy
// type Person = {
//     name: string;
//     age: number;
//     greet(phrase: string): void;
// }
let user1;
user1 = {
    name: 'Hidayah',
    age: 22,
    greet(phrase) {
        console.log(phrase + ' ' + this.name);
    },
};
user1.greet('Hi! I am');
