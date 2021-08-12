/** @format */

class Car {
    constructor(color, company) {
        this.color = color;
        this.company = company;
    }
}

var newCar = new Car("White", "Suzuki");

console.log(newCar.color);
console.log(newCar.company);
