"use strict";
function add(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toLocaleString() + b.toLocaleString();
    }
    return a + b;
}
;
const result = add(2, 'Hello');
result.split(' ');
