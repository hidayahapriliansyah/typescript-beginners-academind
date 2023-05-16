"use strict";
// const names: Array<string> = [];
function mergeObj(objA, objB) {
    return Object.assign(objA, objB);
}
;
const merge = mergeObj({ hello: 'hello' }, { age: 22 });
console.log(merge.hello);
