"use strict";
// const names: Array<string> = [];
// const promise: Promise<string> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('It is done!');
//   }, 2000);
// });
// promise.then((response) => {
//   response.toLocaleLowerCase();
// });
function mergeObj(objA, objB) {
    return Object.assign(objA, objB);
}
;
const merge = mergeObj({ name: 'hidayah' }, { age: 22 });
console.log(merge.name);
