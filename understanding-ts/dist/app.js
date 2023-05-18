"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Logger(logString) {
    console.log('LOGGING DECORATOR');
    return function (constructor) {
        console.log('LOGGING TRUE DECORATOR');
        console.log(logString);
        console.log(constructor);
    };
}
;
function WithTemplate(template, hookId) {
    console.log('TEMPLATE DECORATOR');
    return function (constructor) {
        console.log('TEMPLATE TRUE DECORATOR');
        const hookEl = document.getElementById('app');
        console.log('typeof constructor');
        console.log(typeof constructor);
        console.log(constructor);
        const p = new constructor();
        console.log('typeof p');
        console.log(typeof p);
        if (hookEl) {
            hookEl.innerHTML = template;
            console.log(p, 'peeeeeeeeee');
            hookEl.querySelector('h1').textContent = p.name;
        }
    };
}
;
// function testConstructor(constructor: Function | any) {
//   console.log('dari mana nich');
//   console.log(constructor);
//   const p = new constructor();
//   console.log(p.name);
//   console.log('testConstructor terpanggil');
// }
let Person = 
// @testConstructor
class Person {
    constructor() {
        this.name = 'Adi';
        console.log('Heloo');
    }
};
Person = __decorate([
    Logger('LOGGING PERSON'),
    WithTemplate('<h1>My person Object</h1>', 'app')
    // @testConstructor
], Person);
const person = new Person();
console.log(Person);
