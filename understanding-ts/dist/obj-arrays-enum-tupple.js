"use strict";
//  buat deklarasi type nya bisa kayak gini
// const person: {
//   name: string;
//   age: number;
// } = {
//   name: 'Hidayah',
//   age: 22,
// };
var Role;
(function (Role) {
    Role["ADMIN"] = "admin";
    Role["USER"] = "user";
    Role["SUPER_ADMIN"] = "super";
})(Role || (Role = {}));
;
const person = {
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
