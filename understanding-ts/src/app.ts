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
  return function<T extends { new (...args: any[]): {name: string} }>(originalConstructor: T) {
    return class extends originalConstructor{
      constructor(..._: any[]) {
        super();
        const hookEl = document.getElementById(hookId)!;
        if (hookEl) {
          hookEl.innerHTML = template;
          hookEl.querySelector('h1')!.textContent = this.name;
        }
      }
    }
  }
};

@Logger('LOGGING PERSON')
@WithTemplate('<h1>My person Object</h1>', 'app')
class Person {
  name = 'Adi';

  constructor() {
    console.log('Heloo');
  }
}

const person = new Person();
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

  @Log3
  getPriceWithTax(@Log4 tax: number) {
    return this._price * (1 + tax);
  }
}

const p1 = new Product('Book1', 19);
const p2 = new Product('Book2', 29);

// creating auto bind decorator
function Autobind(_: any, _2: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get() {
      const boundFn = originalMethod.bind(this);
      return boundFn;
    }
  };
  return adjDescriptor;
};

class Printer {
  message = 'This is works!';

  @Autobind
  showMessage() {
    console.log(this.message);
  }
}

const p = new Printer();
const btn = document.querySelector('button')!;
btn.addEventListener('click', p.showMessage);

//  validation with Decorators
interface ValidatorConfig {
  [property: string] : {
    [validatableProp: string]: string[] // ['required', 'positive'],
  }
}

const registerdValidators: ValidatorConfig = {};

function Required(target: any, propName: string) {
  registerdValidators[target.constructor.name] = {
    ...registerdValidators[target.constructor.name],
    [propName]: ['required'],
  };
};

function PositiveNumber(target: any, propName: string) {
  registerdValidators[target.constructor.name] = {
    ...registerdValidators[target.constructor.name],
    [propName]: ['positive'],
  };
};

function validate(obj: any) {
  const objValidatorConfig = registerdValidators[obj.constructor.name];
  if (!objValidatorConfig) {
    return true;
  }
  let isValid = true;
  for (const prop in objValidatorConfig) {
    for (const validator of objValidatorConfig[prop]) {
      switch (validator) {
        case 'required':
          isValid = isValid && !!obj[prop];
          break;
        case 'positive':
          isValid = isValid && obj[prop] > 0;
          break;
      }
    }
  }
  return isValid;
}


class Course {
  @Required
  title: string;
  @PositiveNumber
  price: number;

  constructor(title: string, price: number) {
    this.title = title;
    this.price = price;
  }
}

const courseForm = document.querySelector('form')!;
courseForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const titleEl = document.getElementById('title')! as HTMLInputElement;
  const priceEl = document.getElementById('price')! as HTMLInputElement;

  const title = titleEl.value;
  const price = +priceEl.value;

  const createdCourse = new Course(title, price);

  if (!validate(createdCourse)) {
    alert('Invalid input, please try again!');
    return;
  }

  console.log(createdCourse);
});