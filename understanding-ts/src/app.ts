// function Logger(hahaha: Function) {
//   console.log('Logging ...');
//   console.log(hahaha);
// };

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
function logMethod(target: any, key: string, descriptor: PropertyDescriptor) {
  // Modifikasi perilaku metode di sini
  console.log(`Metode ${key} telah didekorasi`);
}

class Example {
  @logMethod
  greet() {
    console.log('Halo!');
  }
}

const examplee = new Example();