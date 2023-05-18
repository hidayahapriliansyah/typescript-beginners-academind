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
// function createCourseGoal() {
//   const courseGoal: CourseGoal = {
//     title: 'Hello',
//     description: 'des',
//     date: new Date(),
//   };
//   return courseGoal;
// };
function createCourseGoal() {
    let courseGoal = {};
    courseGoal.title = 'test';
    courseGoal.description = 'desrsersd';
    courseGoal.date = new Date();
    return courseGoal;
}
const names = ['Satu', 'dua'];
names.push('sdfsdf');
