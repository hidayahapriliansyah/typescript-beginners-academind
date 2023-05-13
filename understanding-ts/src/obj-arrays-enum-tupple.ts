//  buat deklarasi type nya bisa kayak gini
// const person: {
//   name: string;
//   age: number;
// } = {
//   name: 'Hidayah',
//   age: 22,
// };

enum Role { ADMIN = 'admin', USER = 'user', SUPER_ADMIN = 'super' };

const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: Role;
  test: [number, string];
  any: any;
} = {
  name: 'Hidayah',
  age: 22,
  hobbies: ['Sport', 'Cooking'],
  role: Role.ADMIN,
  test: [2, 'dua'],
  any: 'bebas',
};

console.log(person.role);
console.log(person.name);
console.log(Role.ADMIN, Role.SUPER_ADMIN, Role.USER);