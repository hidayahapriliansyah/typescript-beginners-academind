"use strict";
class Departement {
    constructor(id, name) {
        this.id = id;
        this.employees = [];
        this.name = name;
    }
    describe() {
        console.log('Departement : ' + this.name);
        console.log(Departement.year);
        // console.log(this.year);
        // gak bisa ke this karena this itu menunjuk ke instance
        // sedangkan static itu gak diinstansiasi bisa diakses
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
Departement.year = 2023;
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
    static getInstance() {
        if (AccountingDepartmend.instance) {
            return this.instance;
        }
        this.instance = new AccountingDepartmend('d2', []);
        return this.instance;
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
const accounting = AccountingDepartmend.getInstance();
const accounting2 = AccountingDepartmend.getInstance();
console.log('sama gak?', accounting === accounting2);
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
