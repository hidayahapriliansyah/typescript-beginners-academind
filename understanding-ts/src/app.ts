type Combinable = number | string;

function add(a: number, b: number): number;
function add(a: string, b: number): string;
function add(a: number, b: string): string;
function add(a: string, b: string): string;
function add(a: Combinable, b: Combinable): Combinable {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toLocaleString() + b.toLocaleString();
  }
  return a + b;
};

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

console.log(fetchData?.job?.title);

const userInput = '';
//  '' dianggap false kalau pakai ||

const nameInput = userInput ?? 'DEFAULT';

console.log('name', nameInput);