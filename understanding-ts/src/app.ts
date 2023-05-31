import 'reflect-metadata';
import { plainToClass } from 'class-transformer';

// import _ from 'lodash';

// console.log(_.shuffle([1, 2, 3]));

// declare var GLOBAL: string;

// console.log(GLOBAL);

import { Product } from './product.model';

const products = [
  { title: 'Hello', price: 10},
  { title: 'Hi', price: 11},
]

const p1 = new Product('A Book', 10);
// const p2 = new Product('A Shirt', 10);

const mappedProducts = products.map((product) => new Product(product.title, product.price));
console.log(mappedProducts);
for (const product of mappedProducts) {
  console.log(product.getInformation());
}

console.log(p1.getInformation());
