//추가 요구사항
//1. 전기차 클래스 <- Car 클래스의 상속을 받을거다.

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
// 전기차 class 정의
class ElectronicCar extends Car {
  constructor(modelName, modelYear, price, chargeTime) {
    // Car(부모 class)에게도 알려주기!!
    //부모랑 자식의 싱크를 맞춰주기 위해 사용
    super(modelName, modelYear, "e", price);
    this._chargeTime = chargeTime;
  }

  set chargeTime(value) {
    this._chargeTime = this.chargeTime;
  }
  get chargeTime() {
    return this._chargeTime;
  }
}

const eleCar1 = new ElectronicCar("테슬라", "2023", 9000, 60);
eleCar1.makeNoise();
eleCar1.makeYear();

console.log("-----------");
console.log(eleCar1._chargeTime);
eleCar1._chargeTime = 20;
console.log(eleCar1._chargeTime);
//자동차 만들기
// const car1 = new Car("Sorento", "2023", "e", 5000);
// const car2 = new Car("Sonata", "1999", "g", 4000);
// const car3 = new Car("palisade", "2010", "d", 4500);

// car1.makeYear();
// car2.makeYear();
// car3.makeYear();
// // const car2 = new Car();
// // const car3 = new Car();
