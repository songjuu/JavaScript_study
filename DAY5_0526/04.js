class Rectangle {
  constructor(height, width) {
    this._height = height;
    this._width = width;
  }
  //width를 위한 getter
  get width() {
    return this._width;
  }
  //width를 위한 setter
  set width(value) {
    if (value <= 0) {
      console.log("[오류] 가로길이는 0보다 커야 합니다!");
    } else if (typeof value !== "number") {
      console.log("[오류] 가로길이로 입력된 값이 숫자 타입이 아닙니다.");
    }

    this._width = value;
  }
  //height를 위한 getter
  get height() {
    return this._height;
  }
  //height를 위한 setter
  set height(value) {
    if (value <= 0) {
      console.log("[오류] 세로길이는 0보다 커야 합니다!");
    } else if (typeof value !== "number") {
      console.log("[오류]  세로길이로 입력된 값이 숫자 타입이 아닙니다.");
    }

    this._height = value;
  }
  getArea() {
    const a = this._width * this._height;
    console.log(`넓이는 => ${a}입니다.`);
  }
}

const rect1 = new Rectangle(10, 7);
rect1.getArea();

//instance 생성

// const rect1 = new Rectangle(10, 20);
// const reCt2 = new Rectangle(10, 30);
// const rect3 = new Rectangle(15, 20);

//underscore : private(은말하고, 감춰야 할 때)
