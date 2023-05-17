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
console.warn('Generic Class');
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        if (this.data.indexOf(item) === -1) {
            return;
        }
        this.data.splice(this.data.indexOf(item), 1);
    }
    ;
    getItems() {
        return [...this.data];
    }
    ;
}
const textStorage = new DataStorage();
textStorage.addItem('Hidayah');
textStorage.addItem('Apriliansyah');
textStorage.removeItem('Hidayah');
console.log(textStorage.getItems());
const objStorage = new DataStorage();
objStorage.addItem({ name: 'Hidayah' });
objStorage.addItem({ name: 'Apriliansyah' });
objStorage.removeItem({ name: 'Hidayah' });
console.log(objStorage);
