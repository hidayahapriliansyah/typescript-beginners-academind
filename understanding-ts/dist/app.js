"use strict";
var _a;
function add(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toLocaleString() + b.toLocaleString();
    }
    return a + b;
}
;
const result = add(2, 'Hello');
result.split(' ');
const fetchData = {
    id: 'u1',
    name: 'Hidayaha',
    job: {
        title: 'Front End Programmer',
        description: 'My own componay',
    }
};
console.log((_a = fetchData === null || fetchData === void 0 ? void 0 : fetchData.job) === null || _a === void 0 ? void 0 : _a.title);
