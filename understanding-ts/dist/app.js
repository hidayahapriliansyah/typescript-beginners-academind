"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
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
    return function (originalConstructor) {
        return class extends originalConstructor {
            constructor(..._) {
                super();
                const hookEl = document.getElementById(hookId);
                if (hookEl) {
                    hookEl.innerHTML = template;
                    hookEl.querySelector('h1').textContent = this.name;
                }
            }
        };
    };
}
;
let Person = class Person {
    constructor() {
        this.name = 'Adi';
        console.log('Heloo');
    }
};
Person = __decorate([
    Logger('LOGGING PERSON'),
    WithTemplate('<h1>My person Object</h1>', 'app')
], Person);
const person = new Person();
function Log(target, propertyName) {
    console.log('Property decorator!');
    console.log('target');
    console.log(target);
    console.log('propertyName');
    console.log(propertyName);
}
function Log2(target, name, descriptor) {
    console.log('Accessor Decorator!');
    console.log('target', target);
    console.log('name', name);
    console.log('descriptor ' + typeof descriptor, descriptor);
}
function Log3(target, name, descriptor) {
    console.log('Method Decorator!');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}
function Log4(target, name, position) {
    console.log('Parameter Decorator!');
    console.log(target);
    console.log(name);
    console.log(position);
}
class Product {
    constructor(t, p) {
        this.title = t;
        this._price = p;
    }
    set price(val) {
        if (val < 0) {
            throw new Error('Price must be not 0');
        }
        this._price = val;
    }
    getPriceWithTax(tax) {
        return this._price * (1 + tax);
    }
}
__decorate([
    Log
], Product.prototype, "title", void 0);
__decorate([
    Log2
], Product.prototype, "price", null);
__decorate([
    Log3,
    __param(0, Log4)
], Product.prototype, "getPriceWithTax", null);
const p1 = new Product('Book1', 19);
const p2 = new Product('Book2', 29);
function Autobind(_, _2, descriptor) {
    const originalMethod = descriptor.value;
    const adjDescriptor = {
        configurable: true,
        enumerable: false,
        get() {
            const boundFn = originalMethod.bind(this);
            return boundFn;
        }
    };
    return adjDescriptor;
}
;
class Printer {
    constructor() {
        this.message = 'This is works!';
    }
    showMessage() {
        console.log(this.message);
    }
}
__decorate([
    Autobind
], Printer.prototype, "showMessage", null);
const p = new Printer();
const btn = document.querySelector('button');
btn.addEventListener('click', p.showMessage);
function Required() {
}
;
function PositiveNumber() { }
;
function validate(obj) { }
class Course {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
}
__decorate([
    Required
], Course.prototype, "title", void 0);
__decorate([
    PositiveNumber
], Course.prototype, "price", void 0);
const courseForm = document.querySelector('form');
courseForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const titleEl = document.getElementById('title');
    const priceEl = document.getElementById('price');
    const title = titleEl.value;
    const price = +priceEl.value;
    const createdCourse = new Course(title, price);
    console.log(createdCourse);
});
