"use strict";
class Departement {
    constructor(id, name) {
        this.id = id;
        this.employees = [];
        this.name = name;
    }
    describe() {
        console.log('Departement : ' + this.name);
    }
    call() {
        console.log('call' + this.name);
    }
    addEmployes(employee) {
        this.employees.push(employee);
    }
    printEmployeesInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
class ITDepartment extends Departement {
    constructor(id, admins) {
        super(id, 'IT');
    }
}
class AccountingDepartmend extends Departement {
    constructor(id, reports) {
        super(id, 'Accounting');
        this.reports = reports;
        this.lastReport = reports[0];
    }
    addEmployes(employee) {
        if (employee === 'Tolak')
            return;
        this.employees.push(employee);
    }
    set addReport(text) {
        this.reports.push('text');
        this.lastReport = text;
    }
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw Error('No report');
    }
}
const it = new ITDepartment('d1', ['Sela', 'Dia']);
it.describe();
it.addEmployes('Adi');
it.addEmployes('Hidayah');
it.printEmployeesInformation();
console.log('it');
console.log(it);
const accounting = new AccountingDepartmend('d2', []);
accounting.describe();
console.log('accounting');
console.log(accounting);
accounting.addEmployes('Tolak');
accounting.addEmployes('Firmansyah');
accounting.addEmployes('April');
accounting.printEmployeesInformation();
accounting.addReport = 'Report 1';
console.log('accounting with report');
console.log(accounting);
console.log('accounting reports');
console.log(accounting.mostRecentReport);
