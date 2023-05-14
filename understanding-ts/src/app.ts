class Departement {
  name: string;

  constructor(n: string) {
    this.name = n;
  }
}

const departement = new Departement('accounting');

console.log(departement);
