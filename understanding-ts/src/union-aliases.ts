type Combine = number | string;
type ConversionDescriptor = 'as-number' | 'as-string';

const combine = (
  input1: Combine,
  input2: Combine,
  resultConversion: ConversionDescriptor,
  ) => {
  let result: Combine;

  if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
    result = +input1 + +input2;
    // kalau inputnya string terus dipaksa jadi number maka hasilnya bakal jadi NaN
  } else {
    result = input1.toString() + input2.toString();
  }

  return result;
};

const combineAge = combine(20, 10, 'as-string');
console.log(combineAge);

const combineName = combine('Hello', 'Adi', 'as-number');
console.log(combineName);