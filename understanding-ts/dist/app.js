"use strict";
// type Admin = {
//   name: string;
//   privilege: string[];
// }
const employee = {
    name: 'Hidayah',
    privilege: ['madang'],
    startDate: new Date(),
};
function add(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toLocaleString() + b.toLocaleString();
    }
    return a + b;
}
;
function printEmployeeInformation(emp) {
    if ('privileges' in emp) {
        console.log('Privileges admin : ' + emp.privileges);
    }
    if ('startDate' in emp) {
        console.log('Startdate Employee : ' + emp.startDate);
    }
}
;
const emp1 = {
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
    }
    ;
    loadCargo(amount) {
        console.log('Loading cargo ...' + amount);
    }
    ;
}
const v1 = new Car();
const v2 = new Truck();
function useVehicle(vehicle) {
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
    vehicle.drive();
}
useVehicle(v2);
