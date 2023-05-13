"use strict";
const add = (n1, n2) => {
    return n1 + n2;
};
const printResult = (result) => {
    console.log('Result : ' + result);
};
console.log(printResult(add(5, 10)));
// bisa juga let combineValues : Function; tapi bentuk Function nya gak spesifik
let combineValues;
combineValues = add;
console.log('combineValues(5, 10)');
console.log(combineValues(5, 10));
function addAndHandle(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
;
console.log('addAndHandle');
addAndHandle(5, 3, (num) => console.log(num));
console.log(addAndHandle(5, 3, (num) => console.log(num)));
// tipe data return void sama undefined itu beda.
// emang sih void itu kalau dijalanin minta returnnya bakal undefined
// void itu bener bener gak ada statement return; meskipun cuma return kosong
// yang mana bakal ngasilin undefined
