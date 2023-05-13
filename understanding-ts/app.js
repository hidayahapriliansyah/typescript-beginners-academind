var combine = function (input1, input2, resultConversion) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
        result = +input1 + +input2;
        // kalau inputnya string terus dipaksa jadi number maka hasilnya bakal jadi NaN
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
};
var combineAge = combine(20, 10, 'as-string');
console.log(combineAge);
var combineName = combine('Hello', 'Adi', 'as-number');
console.log(combineName);
