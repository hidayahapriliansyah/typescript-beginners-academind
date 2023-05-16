// const userInput = document.getElementById('user-input')! as HTMLInputElement;
const userInput = <HTMLInputElement>document.getElementById('user-input')!;

userInput.value = 'Hello Adi';