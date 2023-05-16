// const names: Array<string> = [];

// const promise: Promise<string> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('It is done!');
//   }, 2000);
// });

// promise.then((response) => {
//   response.toLocaleLowerCase();
// });

interface Hello {
  hello: 'hello';
}

function mergeObj<T extends Hello, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
};

const merge = mergeObj({ hello: 'hello' }, { age: 22 });
console.log(merge.hello);

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T) : [T, string]  {
  let description = 'Got no element';
  if (element.length === 1) {
    description = 'Got 1 element';
  } else if (element.length > 1) {
    description = 'Got ' + element.length + ' element';
  }
  return [element, description];
};

console.log(countAndDescribe('Adi'));

function extractAndConver<T extends object, U extends keyof T>(obj: T, key: U) {
  return obj[key];
};

console.log(extractAndConver({ name: 'Hidayah extract' }, 'name'));