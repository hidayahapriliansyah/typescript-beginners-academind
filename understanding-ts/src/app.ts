// function Logger(logString: string) {
//   console.log('LOGGING DECORATOR');
//   return function(constructor: Function) {
//     console.log('LOGGING TRUE DECORATOR');
//     console.log(logString);
//     console.log(constructor);
//   }
// };

// function WithTemplate(template: string, hookId: string) {
//   console.log('TEMPLATE DECORATOR');
  // return function(constructor: any) {
  //   console.log('TEMPLATE TRUE DECORATOR');
  //   const hookEl = document.getElementById('app')!;
  //   console.log('typeof constructor');
  //   console.log(typeof constructor);
  //   console.log(constructor);
  //   const p = new constructor();
  //   console.log('typeof p');
  //   console.log(typeof p);
  //   if (hookEl) {
  //     hookEl.innerHTML = template;
  //     console.log(p, 'peeeeeeeeee');
  //     hookEl.querySelector('h1')!.textContent = p.name;
  //   }
  // }
// };

// // function testConstructor(constructor: Function | any) {
// //   console.log('dari mana nich');
// //   console.log(constructor);
// //   const p = new constructor();
// //   console.log(p.name);
// //   console.log('testConstructor terpanggil');
// // }

// @Logger('LOGGING PERSON')
// @WithTemplate('<h1>My person Object</h1>', 'app')
// @testConstructor
// class Person {
//   name = 'Adi';

//   constructor() {
//     console.log('Heloo');
//   }
// }

// const person = new Person();
// const person2 = new Person();
// console.log(Person);

// property decorator

function Log(target: any, propertyName: string | Symbol) {
  console.log('Property decorator!');
  console.log('target');
  console.log(target);
  console.log('propertyName');
  console.log(propertyName);
}

function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log('Accessor Decorator!');
  console.log('target', target);
  console.log('name', name);
  console.log('descriptor ' + typeof descriptor, descriptor);
}

function Log3(target: any, name: string | Symbol, descriptor: PropertyDescriptor) {
  console.log('Method Decorator!');
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function Log4(target: any, name: string | Symbol, position: number) {
  console.log('Parameter Decorator!');
  console.log(target);
  console.log(name);
  console.log(position);
}

class Product {
  @Log
  title: string;
  private _price: number;

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }

  @Log2
  set price(val: number) {
    if (val < 0) {
      throw new Error('Price must be not 0');
    }

    this._price = val;
  }

  @Log2
  getPriceWithTax(@Log4 tax: number) {
    return this._price * (1 + tax);
  }
}

// function CheckDecorate (target: Function) {
//   console.log('jalaaan ....');
// };

// @CheckDecorate
// class CheckClass {
//   constructor() {
//     console.log('Constructo checkClass');
//   }
// }
