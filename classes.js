// declaration
class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    print() {
        console.log(`${this.make} ${this.model} (${this.year})`);
    }
}

let myCar = new Car('bmw', '745li', 2010);
myCar.print();

// console.log(myCar);
// console.log(typeof myCar);

// console.log(Car);
// console.log(typeof Car);

// expression
// let Car = class {

// }

class SportsCar extends Car {
    revEngine() {
        console.log('Vrooomm goes the ' + this.model);
    }
}

let mySportsCar = new SportsCar('dodge', 'viper', 2011);
mySportsCar.print();
mySportsCar.revEngine();

