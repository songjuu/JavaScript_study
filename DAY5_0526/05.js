//추가 요구사항
//1. modelName, modelYear, price, type을 가져오는 메서드
//2. modelName, modelYear, price, type을 세팅 메서드
//3. 만든 인스턴스를 통해서 마지막에 set 해서 get하는 로직까지

class Car {
  constructor(modelName, modelYear, type, price) {
    this._modelName = modelName;
    this._modelYear = modelYear;
    this._type = type;
    this._price = price;
  }

  get modelName() {
    return this._modelName;
  }

  set modelName(value) {
    //유효성 검사
    if (value.length <= 0) {
      console.log("[오류] 모델명이 입력되지 않았습니다. 확인해주세요!");
      return;
    } else if (typeof value !== "string") {
      console.log("[오류] 입력된 모델명이 문자형이 아닙니다!");
      return;
    }
    // 입력값에 대한 검증까지 가능한 장점이 있다
    // 검증이 완료된 경우에만 setting!
    this._modelName = value;
  }

  get modelYear() {
    return this._modelYear;
  }

  set modelYear(value) {
    //연도에 대한 유효성 검증 로직은 -> 구글링에 엄청 나옴.
    if (value.length !== 4) {
      console.log("[오류] 입력된 년도가 4자리가 아닙니다. 확인해 주세요.");
      return;
    } else if (typeof value !== "string") {
      console.log("[오류] 입력된 모델명이 문자형이 아닙니다!");
      return;
    }
    // 입력값에 대한 검증까지 가능한 장점이 있다
    // 검증이 완료된 경우에만 setting!
    this._modelName = value;
  }

  get type() {
    return this._type;
  }

  set type(value) {
    if (value.length <= 0) {
      console.log("[오류] 타입이 입력되지 않았습니다. 확인해 주세요.");
      return;
      //g,d,e 아닌 경우 오류
    } else if (value !== "g" && value !== "d" && value !== "e") {
      console.log("[오류] 입력된 타입이 잘못되었습니다. 확인해주세요!");
      return;
    }
    //검증이 완료된 경우
    this._type = value;
  }

  get price() {
    return this._price;
  }

  set price(value) {
    if (typeof value !== "number") {
      console.log("[오류] 가격으로 입력된 값이 숫자가 아닙니다. 확인해주세요.");
      return;
    } else if (value < "1000000") {
      console.log("[오류] 가격은 100만원보다 작을 수 없습니다. 확인해주세요.");
      return;
    }
    //검증이 완료된 경우
    this._price = value;
  }

  makeNoise() {
    console.log(this._modelName + ": 빵!");
  }

  makeYear() {
    console.log(this._modelName + "은" + this._modelYear + "에 출시했습니다.");
  }
}

const car1 = new Car("Sorento", "2023", "e", 5000);
const car2 = new Car("Sonata", "1999", "g", 4000);
const car3 = new Car("palisade", "2010", "d", 4500);

//getter 예시1
console.log(car1.modelName);

//setter 예시1
car1.modelName = 1;
console.log(car1.modelName);
