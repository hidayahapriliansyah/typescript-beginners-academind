class Departement {
  public readonly name: string;
  protected employees: string[] = [];
  public static year = 2023;

  constructor(private id: string, name: string) {
    this.name = name;
  }

  describe(this: Departement) {
    console.log('Departement : ' + this.name);
    console.log(Departement.year);

    // console.log(this.year);
    // gak bisa ke this karena this itu menunjuk ke instance
    // sedangkan static itu gak diinstansiasi bisa diakses
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
  private lastReport: string;
  private static instance: AccountingDepartmend;

  private constructor(id: string, private reports: string[]) {
    super(id, 'Accounting');
    this.lastReport = reports[0];
  }

  static getInstance() {
    if (AccountingDepartmend.instance) {
      return this.instance;
    }
    this.instance = new AccountingDepartmend('d2', []);
    return this.instance;
  }
  
  addEmployes(employee: string): void {
    if (employee === 'Tolak') return;
    this.employees.push(employee);
  }

  set addReport(text: string) {
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

accounting.addReport= 'Report 1';

console.log('accounting with report');
console.log(accounting);
console.log('accounting reports');
console.log(accounting.mostRecentReport);
