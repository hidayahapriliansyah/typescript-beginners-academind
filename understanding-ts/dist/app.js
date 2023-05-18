"use strict";
// function Logger(hahaha: Function) {
//   console.log('Logging ...');
//   console.log(hahaha);
// };
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// class Person {
//   name = 'Hidayah';
//   constructor() {
//     console.log('Creating person object ...');
//   };
//   @Logger('sdfsdf')
//   wiwLogger() {
//     console.log('Wiw loger');
//   }
// }
// const person = new Person();
// console.log(person);
// 
function logMethod(target, key, descriptor) {
    // Modifikasi perilaku metode di sini
    console.log(`Metode ${key} telah didekorasi`);
}
class Example {
    greet() {
        console.log('Halo!');
    }
}
__decorate([
    logMethod
], Example.prototype, "greet", null);
const examplee = new Example();
