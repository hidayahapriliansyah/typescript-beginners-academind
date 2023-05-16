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
