function Logger(logString: string) {
  console.log('LOGGING DECORATOR');
  return function(constructor: Function) {
    console.log('LOGGING TRUE DECORATOR');
    console.log(logString);
    console.log(constructor);
  }
};

function WithTemplate(template: string, hookId: string) {
  console.log('TEMPLATE DECORATOR');
  return function(constructor: any) {
    console.log('TEMPLATE TRUE DECORATOR');
    const hookEl = document.getElementById('app')!;
    console.log('typeof constructor');
    console.log(typeof constructor);
    console.log(constructor);
    const p = new constructor();
    console.log('typeof p');
    console.log(typeof p);
    if (hookEl) {
      hookEl.innerHTML = template;
      console.log(p, 'peeeeeeeeee');
      hookEl.querySelector('h1')!.textContent = p.name;
    }
  }
};

// function testConstructor(constructor: Function | any) {
//   console.log('dari mana nich');
//   console.log(constructor);
//   const p = new constructor();
//   console.log(p.name);
//   console.log('testConstructor terpanggil');
// }

@Logger('LOGGING PERSON')
@WithTemplate('<h1>My person Object</h1>', 'app')
// @testConstructor
class Person {
  name = 'Adi';

  constructor() {
    console.log('Heloo');
  }
}

const person = new Person();
console.log(Person);

