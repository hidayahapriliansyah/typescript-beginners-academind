const names: Array<string> = [];

const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('It is done!');
  }, 2000);
});

promise.then((response) => {
  response.toLocaleLowerCase();
});