class Departement {
  public readonly name: string;
  protected employees: string[] = [];

  constructor(private id: string, name: string) {
    this.name = name;
  }

  describe(this: Departement) {
    console.log('Departement : ' + this.name);
  }

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

class ITDepartment extends Departement {
  constructor(id: string, admins: string[]) {
    super(id, 'IT');
  }
}

class AccountingDepartmend extends Departement {
  constructor(id: string, private reports: string[]) {
    super(id, 'Accounting');
  }
  
  addEmployes(employee: string): void {
    if (employee === 'Tolak') return;
    this.employees.push(employee);
  }

  addReport(text: string) {
    this.reports.push('text');
  }

  getReports() {
    return this.reports;
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

accounting.addReport('Report 1');

console.log('accounting with report');
console.log(accounting);
console.log('accounting reports');
console.log(accounting.getReports());
