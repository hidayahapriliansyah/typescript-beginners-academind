// type Admin = {
//   name: string;
//   privilege: string[];
// }

// type Employee = {
//   name: string;
//   startDate: Date;
// }

interface Admin {
  name: string;
  privilege: string[];
}

interface Employee {
  name: string;
  startDate: Date;
}

interface ElevatedEmployee extends Admin, Employee {

}

const employee: ElevatedEmployee = {
  name: 'Hidayah',
  privilege: ['madang'],
  startDate: new Date(),
};

