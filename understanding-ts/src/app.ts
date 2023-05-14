class Departement {
  public name: string;
  private employees: string[] = [];
  // ini mirip php, mirip banget. buat bikin setter sama getter.

  constructor(n: string) {
    this.name = n;
  }

  describe(this: Departement) {
    console.log('Departement : ' + this.name);
  }
  // fungsi this: Departement
  // nanti kalau ada object yang pake describe dari instance ini
  //  maka si struktur objeknya harus mirip dengan class ini.

  call() {
    console.log('call' + this.name);
  }

  addEmployes(employee: string) {
    this.employees.push(employee);
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