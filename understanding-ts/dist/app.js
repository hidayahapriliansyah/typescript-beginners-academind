"use strict";
// const names: Array<string> = [];
function mergeObj(objA, objB) {
    return Object.assign(objA, objB);
}
;
const merge = mergeObj({ hello: 'hello' }, { age: 22 });
console.log(merge.hello);
function countAndDescribe(element) {
    let description = 'Got no element';
    if (element.length === 1) {
        description = 'Got 1 element';
    }
    else if (element.length > 1) {
        description = 'Got ' + element.length + ' element';
    }
    return [element, description];
}
;
console.log(countAndDescribe('Adi'));
function extractAndConver(obj, key) {
    return obj[key];
}
;
console.log(extractAndConver({ name: 'Hidayah extract' }, 'name'));
