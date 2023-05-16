// const userInput = document.getElementById('user-input')! as HTMLInputElement;
const userInput = <HTMLInputElement>document.getElementById('user-input')!;

userInput.value = 'Hello Adi';

interface ErrorContainer {
  [props: string]: string;
}

const ErrorBag: ErrorContainer = {
  email: 'Hello',
};
