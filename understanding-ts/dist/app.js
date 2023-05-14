"use strict";
class Departement {
    constructor(n) {
        this.name = n;
    }
    describe() {
        console.log('Departement : ' + this.name);
    }
    // fungsi this: Departement
    // nanti kalau ada object yang pake describe dari instance ini
    //  maka si struktur objeknya harus mirip dengan class ini.
    call() {
        console.log('call' + this.name);
    }
}
const accounting = new Departement('Accounting');
accounting.describe();
const accountingCopy = { name: 'Hello', describe: accounting.describe, call: accounting.call };
accountingCopy.describe();
accountingCopy.call();
const accountingCopyNoDiscribe = { call: accounting.call };
console.log('accountingCopyNoDiscribe.call()');
accountingCopyNoDiscribe.call();
