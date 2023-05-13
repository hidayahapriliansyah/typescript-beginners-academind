let userInput: unknown;
let userName: string;

userInput = 10;
userInput = 'Adi';

if (typeof userInput === 'string') {
  userName = userInput;
  console.log(userName);
}

//  never type
function generatorError(message: string, code: number): never {
  throw { message: message, code: code };
};

// console.log('generatorError(An error occured, 500)');
// console.log(generatorError('An error occured', 500));
// ieu ngereunkeun kode dihanapna da throw error nu teu ditangkap
// jadi si test() teu jalan

function test() {
  try {
    console.log('run test()');
    generatorError('An error occured', 500)
  } catch (error) {
    console.log('error');
    console.log(error);
  }
};

test();