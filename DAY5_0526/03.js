class Car {
  constructor(modelName, modelYear, type, price) {
    this.modelName = modelName;
    this.modelYear = modelYear;
    this.type = type;
    this.price = price;
  }

  makeNoise() {
    console.log(this.modelName + ": 빵!");
  }

  makeYear() {
    console.log(this.modelName + "은" + this.modelYear + "에 출시했습니다.");
  }
}

const car1 = new Car("Sorento", "2023", "e", 5000);
const car2 = new Car("Sonata", "1999", "g", 4000);
const car3 = new Car("palisade", "2010", "d", 4500);

car1.makeYear();
car2.makeYear();
car3.makeYear();
// const car2 = new Car();
// const car3 = new Car();
