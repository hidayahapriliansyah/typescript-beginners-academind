"use strict";
class Departement {
    // ini mirip php, mirip banget. buat bikin setter sama getter.
    constructor(name) {
        this.name = name;
        // public name: string;
        this.employees = [];
        // private name diatas adalah shorthand
        // ketika memasukkan name ke constructor maka akan langsung menjadi 
        // this.name tanpa harus deklarasiiin dulu di propertinya nya di atas
        // nah jadi gak perlu nulis ini
        // this.name = name;
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
    addEmployes(employee) {
        this.employees.push(employee);
        // kalau this.employess ini mah gak bisa pake shorthand lah
        // karena ini employees nya bukan ngambil dari argumen method
    }
    printEmployeesInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
const accounting = new Departement('Accounting');
accounting.describe();
accounting.addEmployes('Adi');
accounting.addEmployes('Hidayah');
accounting.printEmployeesInformation();
