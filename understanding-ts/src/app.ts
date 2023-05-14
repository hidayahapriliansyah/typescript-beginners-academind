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

// contoh pakai typeof
type Combinable = number | string;
type Numeric = number;

type Universal = Combinable & Numeric; 

function add(a: Combinable, b: Combinable) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toLocaleString() + b.toLocaleString();
  }
  return a + b;
};

// pakai in
type UnknownEmployee = Admin | Employee;

function printEmployeeInformation(emp: UnknownEmployee) {
  if ('privileges' in emp) {
    console.log('Privileges admin : ' + emp.privileges);
  }
  
  if ('startDate' in emp) {
    console.log('Startdate Employee : ' + emp.startDate);
  }
};

const emp1: UnknownEmployee = {
  name: 'Adi',
  startDate: new Date(),
  privilege: ['apa'],
};

printEmployeeInformation(emp1);

// pakai instance of
class Car {
  drive() {
    console.log('Drive ...');
  }
}

class Truck {
  drive() {
    console.log('Drive ...');
  };

  loadCargo(amount: number) {
    console.log('Loading cargo ...' + amount);
  };
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
  vehicle.drive();
}

useVehicle(v2);
